import { Product } from './Product/index.js';

// const product = {
//   name: 'Modré tričko',
//   price: 800,
//   size: 'L',
// };

// const product2 = {
//   name: 'Červené tričko',
//   price: 900,
//   size: 'S',
// };

// const productElm = Product(product);
// const product2Elm = Product(product2);

// appElm.append(...[productElm, product2Elm]);

const products = [
  {
    name: 'Modré tričko',
    price: 800,
    size: 'L',
    bought: false,
  },
  {
    name: 'Červené tričko',
    price: 900,
    size: 'S',
    bought: true,
  },
  {
    name: 'Zelené tričko',
    price: 500,
    size: 'M',
    bought: false,
  },
];

const appElm = document.querySelector('#app');

// products.forEach((product) => {
//   appElm.append(Product(product));
// });

const productElms = products.map((product) => Product(product));

appElm.append(...productElms);
