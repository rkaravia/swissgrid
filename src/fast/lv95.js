import * as ch1903 from './ch1903';
import * as lv95 from '../common/false_origin/lv95';
import { validateInput } from '../common/util';

export function project(lonLat) {
  validateInput(lonLat);
  return lv95.apply(ch1903.project(lonLat));
}

export function unproject(EN) {
  validateInput(EN);
  return ch1903.unproject(lv95.unapply(EN));
}
