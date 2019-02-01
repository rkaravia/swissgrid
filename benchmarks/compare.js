const Benchmark = require('benchmark');

const proj4 = require('../common/proj4');
const swissgrid = require('../dist/swissgrid');

function comparePoint(operation, [p0, p1]) {
  return new Promise((resolve) => {
    console.log(`\n\n${operation}`, [p0, p1]);

    const suite = new Benchmark.Suite();
    const results = [];
    let result;

    suite
      .add('proj4', () => {
        result = proj4[operation]([p0, p1]);
      })
      .add('swissgrid', () => {
        result = swissgrid[operation]([p0, p1]);
      })
      .add('swissgrid.fast', () => {
        result = swissgrid.fast[operation]([p0, p1]);
      })
      .add('swissgrid.fast (discard result)', () => {
        swissgrid.fast[operation]([p0, p1]);
      })
      .add('do nothing', () => {});

    suite
      .on('cycle', (event) => {
        console.log(String(event.target));
        if (results.length < 3) {
          results.push(result);
        }
      })
      .on('complete', () => {
        console.log('Results:');
        console.log(results);
        resolve();
      });

    suite.run({ async: true });
  });
}

async function compare(operation, points) {
  for (let i = 0; i < points.length; i += 1) {
    await comparePoint(operation, points[i]);
  }
}

module.exports = compare;
