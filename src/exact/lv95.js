import * as ch1903 from './ch1903';
import * as lv95 from '../common/false_origin/lv95';

export function project(lonLat) {
  return lv95.apply(ch1903.project(lonLat));
}

export function unproject(EN) {
  return ch1903.unproject(lv95.unapply(EN));
}
