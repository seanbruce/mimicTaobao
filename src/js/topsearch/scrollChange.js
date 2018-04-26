const top_div = document.getElementById('top');

export function scrollChange() {
  window.addEventListener('scroll', () => {
    const pageY = window.pageYOffset;
    console.log(pageY);
    if (pageY > 30) {
      if(!top_div.classList.contains('change')) {
        console.log('add change');
        top_div.classList.add('change');
      }
    } else if(!(pageY > 30)){
      console.log('remove change');
      top_div.classList.remove('change');
    }
  }, false);
}
