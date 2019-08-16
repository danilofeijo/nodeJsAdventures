class Person {
  constructor(name) {
    this.name = name
  }

  talk() {
    console.log(`My name is ${this.name}`);
  }
}

const fisrtPerson = new Person('Danilo');
fisrtPerson.talk()

const createPerson = name => {
  return {
    talk: () => console.log(`My name is ${name}`)
  }
}

const secondPerson = createPerson('Carlos Daniel')
secondPerson.talk()