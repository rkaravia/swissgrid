import { rigi } from '../../data';

import { apply, unapply } from '../../../src/common/false_origin/lv95';

test('apply', () => {
  const [E, N] = apply(rigi.projected);
  expect(E).toBeCloseTo(rigi.lv95[0], 2);
  expect(N).toBeCloseTo(rigi.lv95[1], 2);
});

test('unapply', () => {
  const [Y, X] = unapply(rigi.lv95);
  expect(Y).toBeCloseTo(rigi.projected[0], 2);
  expect(X).toBeCloseTo(rigi.projected[1], 2);
});
