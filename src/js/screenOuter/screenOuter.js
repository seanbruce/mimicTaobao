import {servicesGenerate} from './servicesGenerate.js';
import {servicesFloatShow} from './servicesFloatShow.js';
import CarouselOne from './carouselOne.js';
import CarouselTwo from './carouselTwo.js';
import billBoardHandler from './billboard.js';
import conveLifeInit from './conveLife.js';
import closeConveBox from './closeConveBox.js';

export function screenOuterInit() {
  const carouselOneContainer_div = document.getElementById('carouselOne');
  const carouselTwoContainer_div = document.getElementById('carouselTwo');
  servicesGenerate();
  servicesFloatShow();
  const carousel1 = new CarouselOne(carouselOneContainer_div, 2000, 2000);
  carousel1.createCarousel();
  const carousel2 = new CarouselTwo(carouselTwoContainer_div, 2000, 2000);
  carousel2.createCarousel();
  billBoardHandler();
  conveLifeInit();
  closeConveBox();
};
