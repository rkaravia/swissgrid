import { toWGS84, fromWGS84 } from '../../src/exact/datum_shift';

import { zimmerwald } from '../data';

test('toWGS84', () => {
  const [X, Y, Z] = toWGS84(zimmerwald.cartesianCH1903);
  expect(X).toBeCloseTo(zimmerwald.cartesianWGS84[0], 3);
  expect(Y).toBeCloseTo(zimmerwald.cartesianWGS84[1], 3);
  expect(Z).toBeCloseTo(zimmerwald.cartesianWGS84[2], 3);
});

test('fromWGS84', () => {
  const [X, Y, Z] = fromWGS84(zimmerwald.cartesianWGS84);
  expect(X).toBeCloseTo(zimmerwald.cartesianCH1903[0], 3);
  expect(Y).toBeCloseTo(zimmerwald.cartesianCH1903[1], 3);
  expect(Z).toBeCloseTo(zimmerwald.cartesianCH1903[2], 3);
});
