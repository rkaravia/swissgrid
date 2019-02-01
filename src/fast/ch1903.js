import { arcSecondsToDegrees, degreesToArcSeconds } from '../common/util';

/**
 * Based on
 * "Approximate formulas for the transformation between Swiss projection coordinates and WGS 84"
 * published by swisstopo, version from December 2016.
 */

export function project([lon, lat, hWGS]) {
  const φ = degreesToArcSeconds(lat);
  const λ = degreesToArcSeconds(lon);
  const φʹ = (φ - 169028.66) / 10000;
  const λʹ = (λ - 26782.5) / 10000;
  const Y = 72.37
    + 211455.93 * λʹ
    - 10938.51 * λʹ * φʹ
    - 0.36 * λʹ * (φʹ ** 2)
    - 44.54 * (λʹ ** 3);
  const X = 147.07
    + 308807.95 * φʹ
    + 3745.25 * (λʹ ** 2)
    + 76.63 * (φʹ ** 2)
    - 194.56 * (λʹ ** 2) * φʹ
    + 119.79 * (φʹ ** 3);
  if (hWGS === undefined) {
    return [Y, X];
  }
  const hCH = hWGS - 49.55
    + 2.73 * λʹ
    + 6.94 * φʹ;
  return [Y, X, hCH];
}

export function unproject([Y, X, hCH]) {
  const yʹ = Y / 1000000;
  const xʹ = X / 1000000;
  const λʹ = 2.6779094
    + 4.728982 * yʹ
    + 0.791484 * yʹ * xʹ
    + 0.1306 * yʹ * (xʹ ** 2)
    - 0.0436 * (yʹ ** 3);
  const φʹ = 16.9023892
    + 3.238272 * xʹ
    - 0.270978 * (yʹ ** 2)
    - 0.002528 * (xʹ ** 2)
    - 0.0447 * (yʹ ** 2) * xʹ
    - 0.0140 * (xʹ ** 3);
  const λ = λʹ * 10000;
  const φ = φʹ * 10000;
  const lon = arcSecondsToDegrees(λ);
  const lat = arcSecondsToDegrees(φ);
  if (hCH === undefined) {
    return [lon, lat];
  }
  const hWGS = hCH + 49.55
    - 12.60 * yʹ
    - 22.64 * xʹ;
  return [lon, lat, hWGS];
}
