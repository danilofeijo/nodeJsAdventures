function getRandonIntegerBetween(min, max) {
  const value = Math.random() * (max - min) + min
  return Math.floor(value)
}

let doorPrize = 0
let firstAttempt = true

do {
  doorPrize = getRandonIntegerBetween(-1, 9)
  if (!firstAttempt) {
    console.log('Randon number is: ' + doorPrize)
  } else {
    console.log('The first randon number is: ' + doorPrize)
    firstAttempt = false
  }
} while (doorPrize != -1)
