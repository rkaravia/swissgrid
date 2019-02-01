import proj4 from '../common/proj4';
import * as swissgrid from '../src';

import { maccagno } from './data';

/**
 * Comparison of swissgrid/exact with proj4
 */
Object.entries({
  proj4,
  swissgrid,
}).forEach(([name, { project, unproject }]) => {
  test(`project [lon, lat] (${name})`, () => {
    const EN = project(maccagno.WGS84.slice(0, 2));
    const [E, N] = EN;
    expect(EN).toHaveLength(2);
    expect(E).toBeCloseTo(2700000.0183, 4);
    expect(N).toBeCloseTo(1100000.0361, 4);
  });

  test(`unproject [E, N] (${name})`, () => {
    const lonLat = unproject(maccagno.lv95.slice(0, 2));
    const [lon, lat] = lonLat;
    expect(lonLat).toHaveLength(2);
    expect(lon).toBeCloseTo(8.730497, 6);
    expect(lat).toBeCloseTo(46.044130, 6);
  });

  test(`unproject + project [E, N] (${name})`, () => {
    const EN = project(unproject(maccagno.lv95.slice(0, 2)));
    const [E, N] = EN;
    expect(EN).toHaveLength(2);
    expect(E).toBeCloseTo(2700000, 2);
    expect(N).toBeCloseTo(1100000, 2);
  });
});
