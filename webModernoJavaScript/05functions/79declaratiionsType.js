console.log(sum(2, 3));
// function declaration - could be called either before or after declaration 
function sum(a, b) {
  return a + b
}

// function expression - should could be called only after declaration
const sub = function (a, b) {
  return a - b
}

// named function expression - should could be called only after declaration
const mult = function mult(a, b) {
  return a * b
}

console.log(sum(2, 4));
console.log(sub(2, 4));
console.log(mult(2, 4));
