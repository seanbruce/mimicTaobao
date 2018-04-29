const top_div = document.getElementById('top');

export function scrollChange() {
  window.addEventListener('scroll', () => {
    const pageY = window.pageYOffset;
    if (pageY > 158) {
      if(!top_div.classList.contains('change')) {
        top_div.classList.add('change');
      }
    } else if(!(pageY > 158)){
      top_div.classList.remove('change');
    }
  }, false);
}
