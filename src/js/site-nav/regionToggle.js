export function regionToggle() {
  const regionButton = document.querySelector('.site-nav-container-btn-region');
  const regionList_ul = document.getElementById('siteNavRegionList');

  regionButton.addEventListener('mouseover', () =>
    regionList_ul.classList.add('dropdown'), false);
  regionButton.addEventListener('mouseout', () =>
    regionList_ul.classList.remove('dropdown'), false);
  };
