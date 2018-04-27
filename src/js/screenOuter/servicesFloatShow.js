const servicesMultiLineMenu_ul = document.querySelector('.screen-outer .multi-line-menu');
const servicesFloat_div = document.querySelector('.screen-outer .services .service-float');

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
      console.log(e.target.closest('ul'));
      servicesFloat_div.style.backgroundColor = getRandomColor();
      servicesFloat_div.classList.add('show');
  }, false);

  servicesMultiLineMenu_ul.addEventListener('mouseout', e => {
    servicesFloat_div.classList.remove('show');
  }, false);
}
