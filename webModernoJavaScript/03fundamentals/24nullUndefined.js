let value; // not initialized
console.log(value);

value = null; // prefer null than undefined
console.log(value);
// console.log(value.toString()); // Error!

const product = {};
console.log(product.price);
console.log(product);

product.price = 3.5;
console.log(product);

product.price = undefined // avoid to set undefined
console.log(!!product.price);
// delete product.price; // to delete an attribute
console.log(product);

product.price = null // without price
console.log(!!product.price);
console.log(product);
