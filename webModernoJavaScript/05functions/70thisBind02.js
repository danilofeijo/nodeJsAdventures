// This function doesn't work due to lost this reference
function PersonFail() {
  this.age = 0

  setInterval(function() {
    this.age++
    console.log(`PersonFail --> ${this.age}`);
  }, 2000)
}

new PersonFail


// Using bind function to solve
function PersonBind() {
  this.age = 0

  setInterval(function() {
    this.age++
    console.log(`PersonBind --> ${this.age}`);
  }.bind(this), 2000)
}

new PersonBind


// Using "self" const to solve
function PersonSelf() {
  this.age = 0
  const self = this

  setInterval(function() {
    self.age++
    console.log(`PersonSelf --> ${self.age}`);
  }, 2000)
}

new PersonSelf
