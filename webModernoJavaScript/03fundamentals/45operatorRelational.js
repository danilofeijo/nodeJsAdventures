console.log('1) ', '1' == 1);
console.log('2) ', '1' === 1);
console.log('3) ', '3' != 3);
console.log('4) ', '3' !== 3);

console.log('5) ', 3 < 2);
console.log('6) ', 3 > 2);
console.log('7) ', 3 <= 2);
console.log('8) ', 3 >= 2);

const date1 = new Date(0);
const date2 = new Date(0);

console.log('9) ', date1 === date2);
console.log('10) ', date1 == date2);
console.log('11) ', date1.getTime() == date2.getTime());

console.log('12) ', undefined == null);
console.log('13) ', undefined === null);
