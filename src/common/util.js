// Polyfill for Number.isFinite
if (Number.isFinite === undefined) {
  // eslint-disable-next-line no-restricted-globals
  Number.isFinite = (value) => typeof value === 'number' && isFinite(value);
}

export function arcSecondsToDegrees(arcSeconds) {
  return arcSeconds / 60 / 60;
}

export function validateInput(array) {
  if (!Array.isArray(array)) {
    throw new Error('Expected input to be an array.');
  }
  if (array.length < 2) {
    throw new Error(`Expected input to be an array with length >= 2, got ${array.length}.`);
  }
  if (array.some((coordinate) => !Number.isFinite(coordinate))) {
    throw new Error('Expected all coordinates to be finite numbers.');
  }
}

export function degreesMinutesSeconds(degrees, minutes, seconds) {
  return (seconds / 60 + minutes) / 60 + degrees;
}

export function degreesToArcSeconds(degrees) {
  return degrees * 60 * 60;
}

export function toDegrees(radians) {
  return (radians * 180) / Math.PI;
}

export function toRadians(degrees) {
  return (degrees * Math.PI) / 180;
}
