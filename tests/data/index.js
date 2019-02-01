import { degreesMinutesSeconds as dms } from '../../src/common/util';

/**
 * Source:
 *    "Formulas and constants for the calculation of the Swiss conformal cylindrical
 *     projection and for the transformation between coordinate systems"
 * published by swisstopo, version from December 2016.
 * The values for Maccagno are provided on pages 13/14.
 * The values for Rigi are provided on pages 8/9.
 * The values for Zimmerwald are provided on page 19.
 */

export const maccagno = {
  lv95: [2700000, 1100000, 600],
  WGS84: [
    dms(8, 43, 49.79),
    dms(46, 2, 38.87),
    650.60,
  ],
};

export const rigi = {
  bessel: [
    dms(8, 29, 11.11127154),
    dms(47, 3, 28.95659233),
  ],
  lv03: [679520.05, 212273.44],
  lv95: [2679520.05, 1212273.44],
  projected: [79520.05, 12273.44],
};

export const zimmerwald = {
  bessel: [
    dms(7, 27, 58.416328),
    dms(46, 52, 42.269284),
    897.361,
  ],
  cartesianCH1903: [4330616.737, 567539.766, 4632721.664],
  cartesianWGS84: [4331291.111, 567554.822, 4633127.010],
  WGS84: [
    dms(7, 27, 54.983506),
    dms(46, 52, 37.540562),
    947.149,
  ],
};
