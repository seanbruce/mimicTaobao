
export function loginToggle() {
  const loginButton = document.querySelector('.site-nav-container-btn-login');
  const siteNavUser = document.getElementById('siteNavUser');
  const loginStyle_div = loginButton.querySelector('.site-nav-btn-hd');

  loginButton.addEventListener('mouseover', () => {
      siteNavUser.classList.add('dropdown');
      loginStyle_div.classList.add('site-nav-btn-dropdown');
    }, false);
  loginButton.addEventListener('mouseout', () => {
      siteNavUser.classList.remove('dropdown')
      loginStyle_div.classList.remove('site-nav-btn-dropdown');
    }, false);
  };
