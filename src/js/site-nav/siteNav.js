import {regionList} from './regionList';
import {regionToggle} from './regiontoggle';
import {loginToggle} from './loginToggle';
import {msgToggle} from './msgToggle';

export function siteNavInit() {
  regionList();
  regionToggle();
  loginToggle();
  msgToggle();
}
