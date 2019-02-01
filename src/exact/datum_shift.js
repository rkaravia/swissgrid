const WGS_84_OFFSET_X = 674.374;
const WGS_84_OFFSET_Y = 15.056;
const WGS_84_OFFSET_Z = 405.346;

export function fromWGS84([X, Y, Z]) {
  return [
    X - WGS_84_OFFSET_X,
    Y - WGS_84_OFFSET_Y,
    Z - WGS_84_OFFSET_Z,
  ];
}

export function toWGS84([X, Y, Z]) {
  return [
    X + WGS_84_OFFSET_X,
    Y + WGS_84_OFFSET_Y,
    Z + WGS_84_OFFSET_Z,
  ];
}
