import { toCartesian, fromCartesian } from '../../../src/exact/ellipsoid/bessel';

import { zimmerwald } from '../../data';

test('toCartesian', () => {
  const [X, Y, Z] = toCartesian(zimmerwald.bessel);
  expect(X).toBeCloseTo(zimmerwald.cartesianCH1903[0], 3);
  expect(Y).toBeCloseTo(zimmerwald.cartesianCH1903[1], 3);
  expect(Z).toBeCloseTo(zimmerwald.cartesianCH1903[2], 3);
});

test('fromCartesian', () => {
  const [lon, lat, h] = fromCartesian(zimmerwald.cartesianCH1903);
  expect(lon).toBeCloseTo(zimmerwald.bessel[0], 8);
  expect(lat).toBeCloseTo(zimmerwald.bessel[1], 8);
  expect(h).toBeCloseTo(zimmerwald.bessel[2], 3);
});
