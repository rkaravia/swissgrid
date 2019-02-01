import { rigi } from '../../data';

import { apply, unapply } from '../../../src/common/false_origin/lv03';

test('apply', () => {
  const [y, x] = apply(rigi.projected);
  expect(y).toBeCloseTo(rigi.lv03[0], 2);
  expect(x).toBeCloseTo(rigi.lv03[1], 2);
});

test('unapply', () => {
  const [Y, X] = unapply(rigi.lv03);
  expect(Y).toBeCloseTo(rigi.projected[0], 2);
  expect(X).toBeCloseTo(rigi.projected[1], 2);
});
