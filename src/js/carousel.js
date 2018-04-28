export default class Carousel {

  constructor(carouselContainer, interval = 1000, idleTime = 3000) {
    this.carouselContainer = carouselContainer;
    this.interval = interval;
    this.idleTime = idleTime;
    this.processState = false;
    this.moveDirection = null;
    this.manualMode = true;
    this.initTime = Date.now();
    this.wrapper = carouselContainer.getElementsByClassName('carouselWrapper')[0];
    this.leftButton = this.carouselContainer.getElementsByClassName('left-btn')[0];
    this.rightButton = this.carouselContainer.getElementsByClassName('right-btn')[0];
  }

  //Change the images order in the wrapper element. remove the first image then append it at last.
  changeOrder() {
    console.log('changeOrder');
    const img = this.wrapper.removeChild(this.wrapper.firstElementChild);
    this.wrapper.appendChild(img);
  }

  //Change the images order reversely in the wrapper element, remove the last image than insert it in the beginning of the wrapper.
  changeOrderReverse() {
    console.log('changeOrderReverse');
    const img = this.wrapper.removeChild(this.wrapper.lastElementChild);
    this.wrapper.insertBefore(img, this.wrapper.firstElementChild);
  }

  // add a css-class called 'moveleft' on the wrapper element, concequently trigger a css animation which move the wrapper element  on x-axis by -640px.
  moveLeft() {
    this.moveDirection = 'left';
    this.wrapper.classList.remove('moveright');
    this.wrapper.classList.add('moveleft');
  }

  // add a css-class called 'moveright' on the wrapper element, concequently trigger a css animation which move the wrapper on x-axis by 640px.
  moveRight() {
    this.moveDirection = 'right';
    this.wrapper.classList.remove('moveleft');
    this.wrapper.classList.add('moveright');
  }

// register eventHandlers.
  createCarousel() {
    window.setInterval(() => {
      console.log(Date.now() -this.initTime,    this.manualMode);
      if((Date.now() - this.initTime) > this.idleTime && this.manualMode) {
        this.autoMove();
      }
    }, 1000);
    this.wrapper.addEventListener('animationstart', e => {
      this.processState  = false;
      if(e.animationName === 'moveright') {
        this.wrapper.classList.remove('prepareMoveright');
      }
    }, false);
    this.wrapper.addEventListener('animationend', e => {
      this.processState = true;
      if(this.manualMode === false) {
        this.wrapper.classList.remove('moveleft');
        this.changeOrder();
      } else {
        if(e.animationName !== 'move') {
          this.wrapper.classList.remove('moveright');
        } else {
          this.wrapper.classList.remove('moveleft');
          this.changeOrder();
        }
      }
    }, false);
    this.leftButton.addEventListener('click', () => this.moveLeftManual(), false);
    this.rightButton.addEventListener('click', () => this.moveRightManual(), false);
  }

  autoMove() {
    this.manualMode = false;
    this.moveLeft();
    this.animation = window.setInterval( () => {
      if(this.processState) {
        window.clearInterval(this.animation);
        this.autoMove();
      }
    }, this.interval);
  }

  moveLeftManual() {
    if(this.processState) {
      this.initTime = Date.now();
      this.terminateAnimation();
      this.manualMode = true;
      this.moveLeft();
    }
  }

  moveRightManual() {
    if(this.processState) {
      this.initTime = Date.now();
      this.terminateAnimation();
      this.manualMode = true;
      this.changeOrderReverse()
      this.wrapper.classList.add('prepareMoveright');
      this.moveRight();
    }
  }


  terminateAnimation() {
    window.clearInterval(this.animation);
    this.animation = null;
  }
}
