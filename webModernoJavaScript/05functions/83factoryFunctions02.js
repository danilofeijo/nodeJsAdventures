// Factory function example
function createProduct(price, value) {
  return {
    price,
    value,
    discount: 15.90,
    packageSpecs: {
      type: 'box',
      size: 'small'
    }
  }
}

const productName = ['JBL Mini', 'Kindle', 'iPhone'];
const productPrice = [120.99, 250.90, 2500.00];

for (let i = 0; i < productName.length; i++) {
  console.log(createProduct(productName[i], productPrice[i]));
}
