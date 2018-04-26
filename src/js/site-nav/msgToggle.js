
export function msgToggle() {
  const msgButton = document.querySelector('.site-nav-container-btn-message');
  const msgPanel_div = document.getElementById('siteNavMessagePanel');
  const msgStyle_div = msgButton.querySelector('.site-nav-btn-hd');

  msgButton.addEventListener('mouseover', () => {
      msgPanel_div.classList.add('dropdown');
      msgStyle_div.classList.add('site-nav-btn-dropdown');
    }, false);
  msgButton.addEventListener('mouseout', () => {
      msgPanel_div.classList.remove('dropdown')
      msgStyle_div.classList.remove('site-nav-btn-dropdown');
    }, false);
  };
