// Basic

const name = 'World';
const phrase = 'Hello ' + name + '!';

const multiLine = `
  Hello
  ${name}
  !`

console.log(phrase, multiLine);

// Expressions 
console.log(`1 + 1 = ${1 + 1}`);

// Using functions
const up = texto => texto.toUpperCase();
console.log(`Hey... ${up('cuidado!')}`)
