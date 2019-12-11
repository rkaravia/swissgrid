import { fast, lv03, lv95 } from '../src';

const variants = [
  { variant: 'fast.lv03', projection: fast.lv03 },
  { variant: 'fast.lv95', projection: fast.lv95 },
  { variant: 'lv03', projection: lv03 },
  { variant: 'lv95', projection: lv95 },
];

variants.forEach(({ variant, projection: { project, unproject } }) => {
  const transformations = [
    { transformation: 'project', transform: project },
    { transformation: 'unproject', transform: unproject },
  ];

  transformations.forEach(({ transformation, transform }) => {
    test(`${variant} ${transformation}()`, () => {
      expect(() => {
        transform();
      }).toThrowError(new Error('Expected input to be an array.'));
    });

    test(`${variant} ${transformation}([])`, () => {
      expect(() => {
        transform([]);
      }).toThrowError(new Error('Expected input to be an array with length >= 2, got 0.'));
    });

    test(`${variant} ${transformation}([0])`, () => {
      expect(() => {
        transform([0]);
      }).toThrowError(new Error('Expected input to be an array with length >= 2, got 1.'));
    });

    test(`${variant} ${transformation}(['foo', 'bar'])`, () => {
      expect(() => {
        transform(['foo', 'bar']);
      }).toThrowError(new Error('Expected all coordinates to be finite numbers.'));
    });

    test(`${variant} ${transformation}([NaN, NaN])`, () => {
      expect(() => {
        transform([NaN, NaN]);
      }).toThrowError(new Error('Expected all coordinates to be finite numbers.'));
    });

    test(`${variant} ${transformation}([Infinity, Infinity])`, () => {
      expect(() => {
        transform([Infinity, Infinity]);
      }).toThrowError(new Error('Expected all coordinates to be finite numbers.'));
    });
  });
});
