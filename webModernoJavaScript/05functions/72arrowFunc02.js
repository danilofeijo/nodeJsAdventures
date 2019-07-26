function PersonArrow(ageStart) {
  this.age = ageStart || 0

  setInterval(() => {
    this.age++
    console.log(`Person with arrow func --> ${this.age}`);
  }, 2000)
}

new PersonArrow(4)
