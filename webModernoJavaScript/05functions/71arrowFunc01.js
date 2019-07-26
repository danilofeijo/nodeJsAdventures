// Traditional function
let double = function (a) {
  return 2 * a
}

// Arrow function
double = a => {
  return 2 * a
}

// Contracted arrow function
double = a => 2 * a

console.log(double(3));

// Traditional function without params
let hello = function () {
  return 'Hello World!'
}

// Contracted arrow function withour params
hello = () => 'Hello World!'

console.log(hello());
