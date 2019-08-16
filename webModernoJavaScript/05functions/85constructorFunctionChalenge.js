function Person(name = 'Mussum') {
  this.name = name;

  // Public method
  this.talk = () => {
    return console.log(`My name is ${this.name}`);
  }
}

const firstPerson = new Person('Danilo')
firstPerson.talk()
