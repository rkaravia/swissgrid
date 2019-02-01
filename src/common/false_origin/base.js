export default function falseOrigin(easting, northing) {
  function apply([Y, X, ...rest]) {
    const E = Y + easting;
    const N = X + northing;
    return [E, N, ...rest];
  }

  function unapply([E, N, ...rest]) {
    const Y = E - easting;
    const X = N - northing;
    return [Y, X, ...rest];
  }

  return { apply, unapply };
}
