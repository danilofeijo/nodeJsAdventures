function rand({min = 0, max = 100}) {
  const random = Math.random();
  // const value = Math.random() * (max - min) + min;
  // return Math.floor(op3);

  console.log('random =', random);
  console.log('min =', min);
  console.log('max =', max);

  const op1 = max - min;
  const op2 = random * op1;
  const op3 = op2 + min;
  console.log('op1 =', op1);
  console.log('op2 =', op2);
  console.log('op3 =', op3);

  const op3b = random * max;
  console.log('op3b =', op3b);
  
  return Math.floor(op3);
};

console.log('Random number 1 =>', rand({min: 0, max: 30}));
console.log('Random number 2 =>', rand({min: 31}));
console.log('Random number 3 =>', rand({}));
