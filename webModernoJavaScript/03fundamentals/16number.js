const peso1 = 1.0;
const peso2 = Number('2.0');

console.log(peso1, peso2);
console.log(Number.isInteger(peso1));

const proof1 = 9.352;
const proof2 = 6.148;

const notesAmount = proof1 * peso1 + proof2 * peso2;
const media = totalNotas / (peso1 + peso2);

console.log(media.toFixed(2));
console.log(media.toString(2)); // binary
console.log(typeof media);
console.log(typeof Number);
