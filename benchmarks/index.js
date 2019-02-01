const compare = require('./compare');

function dms(degrees, minutes, seconds) {
  return (seconds / 60 + minutes) / 60 + degrees;
}

async function run() {
  await compare('project', [
    [dms(8, 43, 49.79), dms(46, 2, 38.87)],
    [dms(7, 27, 54.983506), dms(46, 52, 37.540562)],
    [dms(7, 40, 6.983077), dms(47, 34, 1.385301)],
    [dms(9, 47, 3.697723), dms(47, 30, 55.172797)],
    [dms(6, 6, 7.326361), dms(46, 27, 14.690021)],
    [dms(9, 1, 16.389053), dms(45, 55, 45.438020)],
  ]);

  await compare('unproject', [
    [2700000, 1100000],
    [2602030.74, 1191775.03],
    [2617306.92, 1268507.87],
    [2776668.59, 1265372.25],
    [2497312.65, 1145626.14],
    [2722759.06, 1087648.19],
  ]);
}

run();
