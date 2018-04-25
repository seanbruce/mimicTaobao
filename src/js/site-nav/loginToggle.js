
export function loginToggle() {
  const loginButton = document.querySelector('.site-nav-container-btn-login');
  const siteNavUser = document.getElementById('siteNavUser');

  loginButton.addEventListener('mouseover', () =>
    siteNavUser.classList.add('dropdown'), false);
  loginButton.addEventListener('mouseout', () =>
    siteNavUser.classList.remove('dropdown'), false);
  };
