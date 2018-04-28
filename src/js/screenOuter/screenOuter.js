import {servicesGenerate} from './servicesGenerate.js';
import {servicesFloatShow} from './servicesFloatShow.js';
import CarouselOne from './carouselOne.js';

export function screenOuterInit() {
  const carouselOneContainer_div = document.getElementById('carouselOne');
  servicesGenerate();
  servicesFloatShow();
  const carousel1 = new CarouselOne(carouselOneContainer_div, 2000, 2000);
  carousel1.createCarousel();

};
