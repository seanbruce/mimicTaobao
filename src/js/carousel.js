
export default class Carousel {

  constructor(carouselContainer, interval = 1000) {
    this.carouselContainer = carouselContainer;
    this.interval = interval;
    this.processState = false;
    this.moveDirection = null;
    this.manualMode = false;
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
    this.wrapper.addEventListener('animationend', e => {
      console.log('animationend', e);
      this.processState = true;
      if(!(this.manualMode)) {
        this.wrapper.classList.remove('moveleft');
        if(this.moveDirection === 'left') {
          this.changeOrder();
        } else if(this.moveDirection === 'right'){
          this.changeOrderReverse();
        }
      } else {
        if(e.animationName !== 'move') {
          this.wrapper.classList.remove('moveright');
  //         if(e.animationName === 'movebackward') {
  //           this.wrapper.classList.remove('prepareMoveright');
  //           if(this.moveDirection === 'right') {
  // k          } else {
  //             // this.changeOrderReverse();
  //           }
  //         }
        } else {
          this.wrapper.classList.remove('moveleft');
          this.changeOrder();
        }
      }
    }, false);
    this.wrapper.addEventListener('animationstart', e => {
      this.processState  = false;
      if(e.animationName === moveright) {
        this.wrapper.classList.remove('prepareMoveright');
      }
    }, false);
    this.leftButton.addEventListener('click', () => this.moveLeftManual(), false);
    this.rightButton.addEventListener('click', () => this.moveRightManual(), false);
  }

  autoMove() {
    console.log('animationId: ', this.animation);
    this.manualMode = false;
    this.processState = false;
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
      this.manualMode = true;
      this.terminateAnimation();
      this.processState = false;
      this.moveLeft();
      this.animation = window.setInterval( () => {
      }, 20);
    } else {
      this.terminateAnimation();
    }
  }
  moveRightManual() {
    if(this.processState) {
      this.terminateAnimation();
      this.manualMode = true;
      this.processState = false;
      this.changeOrderReverse()
      this.wrapper.classList.add('prepareMoveright');
      // this.animation = window.setInterval( () => {
        // if(this.processState) {
          window.clearInterval(this.animation);
          this.processState = false;
          this.wrapper.classList.add('moveright');
          this.animation = window.setInterval( () => {
            if(this.processState) {
              window.clearInterval(this.animation);
            }
          }, 0)
        // }
      // }, 0)
    } else {
      this.terminateAnimation();
    }
  }


  terminateAnimation() {
    window.clearInterval(this.animation);
    this.animation = null;
  }
}
