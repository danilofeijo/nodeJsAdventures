function getRandonIntegerBetween(min, max) {
  const value = Math.random() * (max - min) + min
  return Math.floor(value)
}

let doorPrize = 0

while (doorPrize != 5) {
  doorPrize = getRandonIntegerBetween(0, 9)
  console.log('Randon number is --> ' + doorPrize)
}

getRandonIntegerBetween(5,15)
