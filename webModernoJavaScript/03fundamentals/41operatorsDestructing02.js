const [a] = [10];

console.log(a);

const [n1, , n3, , n5, n6 = 0] = [10, 7, 9, 8];
console.log(n1, n3, n5, n6);

// Print the number 6
const [, [, nota]] = [[,8, 8], [7, 6, 5]]
console.log(nota);
