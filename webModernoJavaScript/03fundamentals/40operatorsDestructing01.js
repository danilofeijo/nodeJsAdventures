// new ES2015 resource

const person = {
  name: 'Paul',
  age: '25',
  address: {
    street: '8 Avenue',
    number: '833'
  }
}

const { name, age } = person;
console.log(name, age);

const { name: n, age: a } = person;
console.log(n, a);

const { lastName = 'Young', gender } = person;
console.log(lastName, gender);

const { address: {street, number, zipCode = '22.111-333' } } = person;
console.log(street, number, zipCode);
