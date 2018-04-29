const conveList = document.querySelector('.screen-outer .rightmost-column .convenient-life .conve-list');
const conveListFloat = conveList.getElementsByClassName('item-float');
const conveBox = document.querySelector('.screen-outer .rightmost-column .convenient-life .conve-bd-box');

function conveLifeInit() {
  conveList.addEventListener('mouseover', e => {
    const targetLI = e.target.closest('.item-float');
    if(targetLI) {
      for(const list of conveListFloat) {
        list.classList.remove('selected');
      }
      targetLI.classList.add('selected');
      conveBox.classList.remove('closed');
    }
  }, false)
}

export default conveLifeInit;
