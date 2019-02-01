import * as datumShift from './datum_shift';
import * as bessel from './ellipsoid/bessel';
import * as wgs84 from './ellipsoid/wgs84';
import * as obliqueMercator from './oblique_mercator';

export function project(lonLat) {
  const cartesianWGS84 = wgs84.toCartesian(lonLat);
  const cartesianCH1903 = datumShift.fromWGS84(cartesianWGS84);
  const ellipsoidalCH1903 = bessel.fromCartesian(cartesianCH1903);
  const projectedCH1903 = obliqueMercator.project(ellipsoidalCH1903);
  if (lonLat.length > 2) {
    return [...projectedCH1903, ellipsoidalCH1903[2]];
  }
  return projectedCH1903;
}

export function unproject(YX) {
  const ellipsoidalCH1903 = obliqueMercator.unproject(YX);
  ellipsoidalCH1903.push(YX[2]);
  const cartesianCH1903 = bessel.toCartesian(ellipsoidalCH1903);
  const cartesianWGS84 = datumShift.toWGS84(cartesianCH1903);
  const lonLat = wgs84.fromCartesian(cartesianWGS84);
  if (YX.length > 2) {
    return lonLat;
  }
  return lonLat.slice(0, 2);
}
