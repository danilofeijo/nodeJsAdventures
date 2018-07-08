// Storing a function in a variable
const printSum = function(val1, val2) {
  console.log(val1 + val2);
}

printSum(4, 6);

// Storing an arrow function in a variable
const sum = (val1, val2) => {
  return val1 + val2;
}

console.log(sum(4, 6));

// Implicit return
const minus = (val1, val2) => val1 - val2;

console.log(sum(4, 6));

const printValue = myValue => console.log(myValue);

printValue('Example');
