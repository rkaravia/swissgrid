import ellipsoid from './base';

/**
 * Source:
 * EPSG Geodetic Parameter Registry
 * Semi-Major Axis (a):
 *    6378137 metre
 * Inverse flattening:
 *    298.257223563 unity
 * See http://www.epsg-registry.org/report.htm?type=selection&entity=urn:ogc:def:crs:EPSG::4326&reportDetail=short&style=urn:uuid:report-style:default-with-code&title=WGS%2084
 */

const a = 6378137;
const n = 298.257223563;

const wgs84 = ellipsoid(a, n);

const { fromCartesian, toCartesian } = wgs84;
export { fromCartesian, toCartesian };
