const servicesMultiLineMenu_ul = document.querySelector('.screen-outer .multi-line-menu');
const servicesFloat_div = document.querySelector('.screen-outer .services .service-float');
const services_div = document.querySelector('.screen-outer .services');

function getRandomColor() {
  let letters = Array.from('0123456789ABCDEF');
  let color = '#';
  for(let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

export function servicesFloatShow() {
  servicesMultiLineMenu_ul.addEventListener('mouseover', e => {
    const activatedLine = servicesFloat_div.dataset.activatedLine;
    const targetClosest = e.target.closest('.line-menu');
    if(targetClosest && (activatedLine === null || e.target.dataset.lineNumber !== activatedLine)) {
      servicesFloat_div.style.backgroundColor = getRandomColor();
      servicesFloat_div.dataset.activatedLine = e.target.dataset.lineNumber;
      servicesFloat_div.classList.add('show');
    }
  }, false);

  services_div.addEventListener('mouseleave', e => {
      servicesFloat_div.classList.remove('show');
  }, false);
}
