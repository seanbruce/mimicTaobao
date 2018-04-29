const conveBox = document.querySelector('.screen-outer .rightmost-column .convenient-life .conve-bd-box');
const button = document.querySelector('.screen-outer .rightmost-column .convenient-life .conve-bd-box .close');
const conveList = document.querySelector('.screen-outer .rightmost-column .convenient-life .conve-list');
const conveListFloat = conveList.getElementsByClassName('item-float');

function closeConveBox() {
  button.addEventListener('click', e => {
    e.preventDefault();
    for(const list of conveListFloat) {
      list.classList.remove('selected');
    }
    conveBox.classList.add('closed');

  }, false);
}

export default closeConveBox;
