import { toCartesian, fromCartesian } from '../../../src/exact/ellipsoid/wgs84';

import { zimmerwald } from '../../data';

test('toCartesian', () => {
  const [X, Y, Z] = toCartesian(zimmerwald.WGS84);
  expect(X).toBeCloseTo(zimmerwald.cartesianWGS84[0], 3);
  expect(Y).toBeCloseTo(zimmerwald.cartesianWGS84[1], 3);
  expect(Z).toBeCloseTo(zimmerwald.cartesianWGS84[2], 3);
});

test('fromCartesian', () => {
  const [lon, lat, h] = fromCartesian(zimmerwald.cartesianWGS84);
  expect(lon).toBeCloseTo(zimmerwald.WGS84[0], 8);
  expect(lat).toBeCloseTo(zimmerwald.WGS84[1], 8);
  expect(h).toBeCloseTo(zimmerwald.WGS84[2], 3);
});
