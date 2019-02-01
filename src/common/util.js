export const epsilon = Math.sqrt(Number.EPSILON);

export function arcSecondsToDegrees(arcSeconds) {
  return arcSeconds / 60 / 60;
}

export function degreesMinutesSeconds(degrees, minutes, seconds) {
  return (seconds / 60 + minutes) / 60 + degrees;
}

export function degreesToArcSeconds(degrees) {
  return degrees * 60 * 60;
}

export function toDegrees(radians) {
  return radians * 180 / Math.PI;
}

export function toRadians(degrees) {
  return degrees * Math.PI / 180;
}
