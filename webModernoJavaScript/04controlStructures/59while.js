function getRandonIntegerBetween(min, max) {
  const value = Math.random() * (max - min) + min
  return Math.floor(value)
}

let doorPrize = 0

while (doorPrize != -1) {
  doorPrize = getRandonIntegerBetween(-1, 9)
  console.log('Randon number is --> ' + doorPrize)
}
