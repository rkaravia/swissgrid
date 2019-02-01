import falseOrigin from './base';

const easting = 600000;
const northing = 200000;

const lv03 = falseOrigin(easting, northing);

const { apply, unapply } = lv03;
export { apply, unapply };
