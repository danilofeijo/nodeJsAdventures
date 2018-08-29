console.log('a =', a);
var a = 2;
console.log('a =', a);

function test() {
  console.log('a =', a);
  var a = 2;
  console.log('a =', a);
}
test();

// It doesn't work
console.log('a =', a);
// let a = 2;
console.log('a =', a);
