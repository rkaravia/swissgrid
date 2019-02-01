import { fast } from '../src';

import { maccagno } from './data';
import { degreesMinutesSeconds as dms } from '../src/common/util';

test('project [lon, lat]', () => {
  const EN = fast.project(maccagno.WGS84.slice(0, 2));
  const [E, N] = EN;
  expect(EN).toHaveLength(2);
  expect(E).toBeCloseTo(2699999.76, 2);
  expect(N).toBeCloseTo(1099999.97, 2);
});

test('project [lon, lat, h]', () => {
  const [,, h] = fast.project(maccagno.WGS84);
  expect(h).toBeCloseTo(600.05, 2);
});

test('unproject [E, N]', () => {
  const lonLat = fast.unproject(maccagno.lv95.slice(0, 2));
  const [lon, lat] = lonLat;
  expect(lonLat).toHaveLength(2);
  expect(lon).toBeCloseTo(dms(8, 43, 49.8), 5);
  expect(lat).toBeCloseTo(dms(46, 2, 38.86), 5);
});

test('unproject [E, N, h]', () => {
  const [,, h] = fast.unproject(maccagno.lv95);
  expect(h).toBeCloseTo(650.55, 2);
});
