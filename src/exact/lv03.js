import * as ch1903 from './ch1903';
import * as lv03 from '../common/false_origin/lv03';

export function project(lonLat) {
  return lv03.apply(ch1903.project(lonLat));
}

export function unproject(yx) {
  return ch1903.unproject(lv03.unapply(yx));
}
