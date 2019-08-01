function Car(maxVelocity = 200, delta = 5) {
  // Private attribute
  let currentVelocity = 0

  // Public method
  this.speedUp = function () {
    if (currentVelocity + delta <= maxVelocity) {
      currentVelocity += delta
    } else {
      currentVelocity = maxVelocity
    }
  }

  // Public method
  this.getCurrentVelocity = function () {
    return currentVelocity
  }
}


const fiatUno = new Car

console.log(fiatUno.getCurrentVelocity())
fiatUno.speedUp()
fiatUno.speedUp()
console.log(fiatUno.getCurrentVelocity())


const mercedesA200 = new Car(320, 20)
console.log(mercedesA200.getCurrentVelocity())
mercedesA200.speedUp()
mercedesA200.speedUp()
mercedesA200.speedUp()
mercedesA200.speedUp()
console.log(mercedesA200.getCurrentVelocity())


console.log(typeof Car)
console.log(typeof fiatUno)
console.log(typeof mercedesA200)
