export const Product = (props) => {
  const element = document.createElement('div');
  element.classList.add('product');

  let textTlacitka = 'Koupit';

  if (props.bought) {
    textTlacitka = 'Produkt už máš v košíku';
  }

  element.innerHTML = `
    <h2>${props.name}</h2>
    <div>Cena: ${props.price} Kč</div>
    <div>Velikost: ${props.size}</div>
    <button>${textTlacitka}</button>
  `;

  const btnElm = element.querySelector('button');
  btnElm.addEventListener('click', () => {
    //console.log(`klikuto na produkt ${props.name}`);
    // const nadpisElm = document.createElement('h1');
    // nadpisElm.textContent = 'Můj nadpis';

    element.replaceWith(
      Product({
        name: props.name,
        price: props.price,
        size: props.size,
        bought: !props.bought,
      }),
    );
  });

  return element;
};
