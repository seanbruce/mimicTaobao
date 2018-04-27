const servicesMultiLineMenu_ul = document.querySelector('.screen-outer .multi-line-menu');
const servicesList = [
  {name: '女装', url: '#'},
  {name: '男装', url: '#'},
  {name: '内衣', url: '#'},
  {name: '鞋靴', url: '#'},
  {name: '箱包', url: '#'},
  {name: '配件', url: '#'},
  {name: '童装玩具', url: '#'},
  {name: '孕产', url: '#'},
  {name: '用品', url: '#'},
  {name: '家电', url: '#'},
  {name: '数码', url: '#'},
  {name: '手机', url: '#'},
  {name: '美妆', url: '#'},
  {name: '洗护', url: '#'},
  {name: '保健品', url: '#'},
  {name: '珠宝', url: '#'},
  {name: '眼镜', url: '#'},
  {name: '手表', url: '#'},
  {name: '运动', url: '#'},
  {name: '户外', url: '#'},
  {name: '乐器', url: '#'},
  {name: '游戏', url: '#'},
  {name: '动漫', url: '#'},
  {name: '影视', url: '#'},
  {name: '美食', url: '#'},
  {name: '生鲜', url: '#'},
  {name: '零食', url: '#'},
  {name: '鲜花', url: '#'},
  {name: '宠物', url: '#'},
  {name: '农资', url: '#'},
  {name: '房产', url: '#'},
  {name: '装修', url: '#'},
  {name: '建材', url: '#'},
  {name: '家具', url: '#'},
  {name: '家饰', url: '#'},
  {name: '家纺', url: '#'},
  {name: '汽车', url: '#'},
  {name: '二手车', url: '#'},
  {name: '用品', url: '#'},
  {name: '办公', url: '#'},
  {name: 'DIY', url: '#'},
  {name: '五金电子', url: '#'},
  {name: '百货', url: '#'},
  {name: '餐厨', url: '#'},
  {name: '家庭保健', url: '#'},
  {name: '学习', url: '#'},
  {name: '卡券', url: '#'},
  {name: '本地服务', url: '#'},
];

let servicesGroupList = groupArray(servicesList);

function getRandomColor() {
  let letters = Array.from('0123456789ABCDEF');
  let color = '#';
  for(let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function groupArray(original) {
  const arrayIterator = original.entries();
  const tempArray = [];
  for(let i = 0; i < 16; i++) {
    let tempGroup = [];
    for(let j = 0; j < 3; j++) {
        const entry = arrayIterator.next();
        if(entry.done !== true) {
          tempGroup.push(entry.value[1]);
        } else {
          console.log('done');
        }
    }
    tempArray.push(tempGroup);
  }
  return tempArray;
}

const tempResult = document.createElement('ul');



export function servicesGenerate() {
  for(const servicesGroup of servicesGroupList) {
    const tempUL = document.createElement('ul');
    tempUL.classList.add('line-menu');
    for(const service of servicesGroup) {
      const tempLink = document.createElement('a');
      tempLink.innerText = service.name;
      tempLink.href = service.url;
      const tempLI = document.createElement('li');
      tempLI.appendChild(tempLink);
      tempUL.appendChild(tempLI);
    }
    const tempI = document.createElement('i');
    tempI.classList.add('fas');
    tempI.classList.add('fa-angle-right');
    tempI.classList.add('fa-xs');
    tempUL.appendChild(tempI);
    const tempSpan = document.createElement('span');
    tempSpan.classList.add('pipe');
    tempSpan.innerText = '/';
    const tempSpanSecond = tempSpan.cloneNode(true);
    tempUL.insertBefore(tempSpan, tempUL.children[1]);
    tempUL.insertBefore(tempSpanSecond, tempUL.children[3]);
    servicesMultiLineMenu_ul.appendChild(tempUL);
  }
}
