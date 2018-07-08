// Function without return
function printSum(val1, val2) {
  console.log(val1 + val2)
}

printSum(4, 6);
printSum(4);
printSum(4, 6, 8, 10);

// Function with return
function sum(val1, val2 = 0) {
  return val1 + val2;
}

console.log(sum(4, 6));
console.log(sum(4));
console.log(sum());
