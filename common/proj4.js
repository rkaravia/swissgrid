const proj4 = require('proj4');

function toRadians(degrees, minutes, seconds) {
  const decimalDegrees = ((seconds / 60) + minutes) / 60 + degrees;
  return decimalDegrees * Math.PI / 180;
}

const lv95Proj4 = proj4({
  datumCode: 'ch1903',
  lat0: toRadians(46, 57, 8.66),
  long0: toRadians(7, 26, 22.5),
  projName: 'somerc',
  x0: 2600000,
  y0: 1200000,
});

module.exports = {
  project: lv95Proj4.forward,
  unproject: lv95Proj4.inverse,
};
