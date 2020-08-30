import * as bessel from './ellipsoid/bessel';

import {
  degreesMinutesSeconds, toDegrees, toRadians,
} from '../common/util';

// Constants
const { a, n } = bessel;
const f = 1 / n;

/**
 * Source:
 *    "Formulas and constants for the calculation of the Swiss conformal cylindrical
 *     projection and for the transformation between coordinate systems"
 * published by swisstopo, version from December 2016.
 * The following values are provided on page 7:
 *    φ0 = 46° 57' 08.66" ellipsoidal latitude of the projection centre in Bern
 *    λ0 =  7° 26' 22.50" ellipsoidal longitude of the projection centre in Bern
 *
 * "These are the so-called 'old values', which are still valid for all geodetic purposes. The
 *  so-called 'new values' (from a new determination of the astronomical coordinates of the
 *  fundamental station in Bern from 1938: φ0 = 46° 57' 07.89", λ0 = 7° 26' 22.335" have only
 *  been used for cartographic purposes (indication of latitudes and longitudes on the national
 *  maps). We do not recommend the use of these values."
 */

const φ0 = toRadians(degreesMinutesSeconds(46, 57, 8.66));
const λ0 = toRadians(degreesMinutesSeconds(7, 26, 22.5));

// Helpers
const E2 = 2 * f - (f ** 2);
const R = (a * Math.sqrt(1 - E2)) / (1 - E2 * (Math.sin(φ0) ** 2));
const α = Math.sqrt(1 + (E2 / (1 - E2)) * (Math.cos(φ0) ** 4));
const b0 = Math.asin(Math.sin(φ0) / α);
const E = Math.sqrt(E2);
const K = Math.log(Math.tan(Math.PI / 4 + b0 / 2))
          - α * Math.log(Math.tan(Math.PI / 4 + φ0 / 2))
          + ((α * E) / 2) * Math.log((1 + E * Math.sin(φ0)) / (1 - E * Math.sin(φ0)));

export function project([lon, lat]) {
  const φ = toRadians(lat);
  const λ = toRadians(lon);
  const S = α * Math.log(Math.tan(Math.PI / 4 + φ / 2))
            - ((α * E) / 2) * Math.log((1 + E * Math.sin(φ)) / (1 - E * Math.sin(φ)))
            + K;
  const b = 2 * (Math.atan(Math.exp(S)) - Math.PI / 4);
  const l = α * (λ - λ0);
  const bʹ = Math.asin(Math.cos(b0) * Math.sin(b) - Math.sin(b0) * Math.cos(b) * Math.cos(l));
  const lʹ = Math.atan(Math.sin(l) / (Math.sin(b0) * Math.tan(b) + Math.cos(b0) * Math.cos(l)));
  const Y = R * lʹ;
  const X = (R / 2) * Math.log((1 + Math.sin(bʹ)) / (1 - Math.sin(bʹ)));
  return [Y, X];
}

export function unproject([Y, X]) {
  const bʹ = 2 * (Math.atan(Math.exp(X / R)) - Math.PI / 4);
  const lʹ = Y / R;
  const b = Math.asin(Math.cos(b0) * Math.sin(bʹ)
                      + Math.sin(b0) * Math.cos(bʹ) * Math.cos(lʹ));
  const l = Math.atan(Math.sin(lʹ)
                      / (Math.cos(b0) * Math.cos(lʹ) - Math.sin(b0) * Math.tan(bʹ)));
  const λ = λ0 + l / α;
  let errorʹ;
  let error;
  let Sʹ;
  let S;
  let φ = b;
  do {
    errorʹ = error;
    Sʹ = S;
    S = (Math.log(Math.tan(Math.PI / 4 + b / 2)) - K) / α
        + E * Math.log(Math.tan(Math.PI / 4 + Math.asin(E * Math.sin(φ)) / 2));
    φ = 2 * Math.atan(Math.exp(S)) - Math.PI / 2;
    error = Math.abs(S - Sʹ);
  } while (isNaN(errorʹ) || error < errorʹ);
  const lat = toDegrees(φ);
  const lon = toDegrees(λ);
  return [lon, lat];
}
