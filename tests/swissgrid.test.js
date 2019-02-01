import { project, unproject } from '../src';

import { maccagno } from './data';

test('project', () => {
  const [E, N, h] = project(maccagno.WGS84);
  expect(E).toBeCloseTo(2700000.0096, 4);
  expect(N).toBeCloseTo(1100000.0223, 4);
  expect(h).toBeCloseTo(599.9967, 4);
});

test('unproject', () => {
  const [lon, lat, h] = unproject(maccagno.lv95);
  expect(lon).toBeCloseTo(8.730497, 6);
  expect(lat).toBeCloseTo(46.044130, 6);
  expect(h).toBeCloseTo(650.6033, 4);
});

test('unproject + project', () => {
  const [E, N, h] = project(unproject(maccagno.lv95));
  expect(E).toBeCloseTo(2700000, 3);
  expect(N).toBeCloseTo(1100000, 3);
  expect(h).toBeCloseTo(600, 3);
});
