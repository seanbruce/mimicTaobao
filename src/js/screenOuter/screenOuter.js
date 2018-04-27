import {servicesGenerate} from './servicesGenerate.js';
import {servicesFloatShow} from './servicesFloatShow.js';

export function screenOuterInit() {
  servicesGenerate();
  servicesFloatShow();
};
