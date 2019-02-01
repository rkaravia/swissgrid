import ellipsoid from './base';

/**
 * Source:
 * Bolliger J.: Die Projektionen der Schweizerischen Plan- und Kartenwerke.
 * The following values are provided on page 30, citing [Helmert 1886]:
 * a = 6377397.15500 m
 * b = 6356078.96282 m
 * See https://emuseum.gggs.ch/literatur-lv/liste-Dateien/1967_Bolliger_a.pdf
 */

export const a = 6377397.155;
export const b = 6356078.96282;

const n = a / (a - b);
const bessel = ellipsoid(a, n);

const { fromCartesian, toCartesian } = bessel;
export { fromCartesian, toCartesian };
