function getPrice(tax = 0, currrency = 'R$') {
  return `${currrency} ${this.price * (1 - this.discount) * (1 + tax)}`;
}

const product = {
  name: 'Laptop',
  price: 3499.90,
  discount: 0.15,
  getPrice
}
// Local scope
console.log(product.getPrice())

// Global scope
global.price = 100
global.discount = 0.255
console.log(getPrice());

const car = { price: 100000, discount: 0.1 }

console.log(getPrice.call(car));
console.log(getPrice.apply(car));

console.log(getPrice.call(car, 0.1, '$'));
console.log(getPrice.apply(car, [0.1, '€']));
