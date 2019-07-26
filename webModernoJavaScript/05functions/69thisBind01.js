const person = {
  greeting: 'Bom dia!!!',
  talk() {
    console.log(this.greeting);
  }
}

person.talk()
const talk = person.talk
talk() // It doesn't work

const talkAboutPeople = person.talk.bind(person)
talkAboutPeople()
