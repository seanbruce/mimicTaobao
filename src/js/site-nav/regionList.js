export function regionList() {
  const regionList_ul = document.getElementById('siteNavRegionList');
  const locationArray = [
    '全球',
    '中国大陆',
    '香港',
    '台湾',
    '澳门',
    '马来西亚',
    '澳大利亚',
    '新加坡',
    '新西兰',
    '加拿大',
    '日本',
  ];

  for(const e of locationArray) {
    const newLi = document.createElement('li');
    newLi.innerText = e;
    newLi.classList.add('site-nav-region-list-item');
    regionList_ul.appendChild(newLi);
  }
}
