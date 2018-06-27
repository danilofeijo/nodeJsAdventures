const zoo = ['lion', 'rhino', 'monkey', 'turtle'];
const farm = ['dog', 'cat', 'rabbit'];
const numbers = [1.4, 2.7, 3.8];

// Simple presentation
console.log('Zoo: ' + zoo[1], zoo[3]);
console.log('Zoo: ' + zoo[9]);

// add new value to array
farm[3] = 'bird';

// returns values quantity
console.log(farm.length);

// add multiple values to array
numbers.push({id: 3}, false, null, 'example');
console.log(numbers);

// returns the last value of from array
console.log(numbers.pop());

// delete a value from array
delete numbers[0];
console.log(numbers);

// returns type of array
console.log(typeof farm);
