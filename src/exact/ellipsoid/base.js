import { epsilon, toDegrees, toRadians } from '../../common/util';

export default function ellipsoid(a, n) {
  const f = 1 / n;
  const e2 = 2 * f - (f ** 2);

  function fromCartesian([X, Y, Z]) {
    const λ = Math.atan(Y / X);
    const p = Math.sqrt((X ** 2) + (Y ** 2));
    let Nʹ;
    let N;
    let h;
    let φ = Math.atan(Z / ((1 - e2) * p));
    while (!(Math.abs(N - Nʹ) < epsilon)) {
      Nʹ = N;
      N = a / Math.sqrt(1 - e2 * (Math.sin(φ) ** 2));
      h = p / Math.cos(φ) - N;
      φ = Math.atan(Z / ((1 - e2 * N / (N + h)) * p));
    }
    const lat = toDegrees(φ);
    const lon = toDegrees(λ);
    return [lon, lat, h];
  }

  function toCartesian([lon, lat, h = 0]) {
    const φ = toRadians(lat);
    const λ = toRadians(lon);
    const R_N = a / Math.sqrt(1 - e2 * (Math.sin(φ) ** 2));
    const X = (R_N + h) * Math.cos(φ) * Math.cos(λ);
    const Y = (R_N + h) * Math.cos(φ) * Math.sin(λ);
    const Z = (R_N * (1 - e2) + h) * Math.sin(φ);
    return [X, Y, Z];
  }

  return { fromCartesian, toCartesian };
}
