import { rigi } from '../data';

import { project, unproject } from '../../src/exact/oblique_mercator';

test('project', () => {
  const [Y, X] = project(rigi.bessel);
  expect(Y).toBeCloseTo(rigi.projected[0], 2);
  expect(X).toBeCloseTo(rigi.projected[1], 2);
});

test('unproject', () => {
  const [lon, lat] = unproject(rigi.projected);
  expect(lon).toBeCloseTo(rigi.bessel[0], 8);
  expect(lat).toBeCloseTo(rigi.bessel[1], 8);
});
