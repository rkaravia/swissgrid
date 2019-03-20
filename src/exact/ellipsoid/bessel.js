import ellipsoid from './base';

/**
 * Source:
 * Verordnung des Bundesamtes für Landestopografie über Geoinformation (GeoIV-swisstopo)
 * The following values are provided for both CH1903 and CH1903+:
 * a = 6 377 397.155 m
 * f = 1/299.15281285
 * See https://www.admin.ch/opc/de/classified-compilation/20071096/index.html#a3
 */

export const a = 6377397.155;
export const n = 299.15281285;

const bessel = ellipsoid(a, n);

const { fromCartesian, toCartesian } = bessel;
export { fromCartesian, toCartesian };
