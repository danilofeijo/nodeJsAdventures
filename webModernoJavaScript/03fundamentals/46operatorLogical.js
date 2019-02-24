function buy(work1, work2) {
  const buyIcecrean = work1 || work2;
  const buyTv50 = work1 && work2;
  const buyTv32 = work1 != work2;
  const healthly = !buyIcecrean;

  return {
    buyIcecrean,
    buyTv50,
    buyTv32,
    healthly
  }
}

console.log('case 1', buy(true, true))
console.log('case 2', buy(true, false))
console.log('case 3', buy(false, true))
console.log('case 4', buy(false, false))
