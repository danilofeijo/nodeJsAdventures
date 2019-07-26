const person = {
  greeting: 'Bom dia!!!',
  talk() {
    console.log(this.greeting);
  }
}

// It works!
person.talk()

const talk = person.talk
talk() // It doesn't work

// It works!
const talkAboutPeople = person.talk.bind(person)
talkAboutPeople()
