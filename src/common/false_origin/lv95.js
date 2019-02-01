import falseOrigin from './base';

const easting = 2600000;
const northing = 1200000;

const lv95 = falseOrigin(easting, northing);

const { apply, unapply } = lv95;
export { apply, unapply };
