const billBoard = document.querySelector('.screen-outer .rightmost-column .notice');
const boardHead_UL = billBoard.getElementsByClassName('notice-hd')[0];
const boardBody_UL = billBoard.getElementsByClassName('notice-bd')[0];


function billBoardHandler() {
  boardHead_UL.firstElementChild.classList.add('selected');
  boardBody_UL.firstElementChild.style.display = 'block';
  boardHead_UL.addEventListener('mouseover', e => {
    const targetLI = e.target.closest('li');
    if(targetLI) {
      for(const li of boardHead_UL.children) {
        li.classList.remove('selected');
      }
      targetLI.classList.add('selected');
      for(const li of boardBody_UL.children) {
        if(targetLI.dataset.map !== li.dataset.map) {
          li.style.display = 'none';
        } else {
          li.style.display = 'block';
        }
      }
    }
  }, false);
}

export default billBoardHandler;
