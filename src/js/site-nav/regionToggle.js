export function regionToggle() {
  const regionButton = document.querySelector('.site-nav-container-btn-region');
  const regionList_ul = document.getElementById('siteNavRegionList');
  const regionstyle_div = regionButton.querySelector('.site-nav-btn-hd');

  regionButton.addEventListener('mouseover', () => {
    regionList_ul.classList.add('dropdown');
    regionstyle_div.classList.add('site-nav-btn-dropdown')
    }, false);
  regionButton.addEventListener('mouseout', () => {
    regionList_ul.classList.remove('dropdown');
    regionstyle_div.classList.remove('site-nav-btn-dropdown')
    }, false);
  };
