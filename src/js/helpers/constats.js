export const API_ROOT = 'https://5c73e1fc826db700140a27d8.mockapi.io/api';

export const PropMap = {
  screenSize: 'Размер экрана',
  release: 'Год выпуска',
  processor: 'Процессор',
  videoCard: 'Видеокарта',
  screenResolution: 'Разрешение экрана',
  coreMem: 'Оперативная память',
  diskSize: 'Размер накопителя',
  diskType: 'Тип накопителя',
  color: 'Цвет корпуса',
  wifiModule: 'Wi-Fi модуль'
};

export const CatalogMap = {
  mac: {
    name: 'Mac',
    filter: [
      {
        name: 'screenSize',
        options: ["27\"", "21,5\"", "15\"", "13\"", "12\""]
      },
      {
        name: 'diskSize',
        options: ['2TB', '1TB', '512GB', '256GB', '128GB']
      },
      {
        name: 'coreMem',
        options: ['32GB', '16GB', '8GB']
      }
    ]
  },
  ipad: {
    name: 'iPad',
    filter: [
      {
        name: 'diskSize',
        options: ['512GB', '256GB', '128GB', '64GB']
      },
      {
        name: 'color',
        options: ['silver', 'gold']
      },
      {
        name: 'wifiModule',
        options: ['Wi-Fi', 'Wi-Fi + Cellular']
      }
    ]
  },
  iphone: {
    name: 'iPhone',
    filter: [
      {
        name: 'diskSize',
        options: ['256GB', '128GB', '64GB', '32GB']
      },
      {
        name: 'color',
        options: ['black', 'silver', 'gold', 'pink', 'black onyx', 'red', 'yellow', 'corral', 'white', 'blue']
      }
    ]
  }
};