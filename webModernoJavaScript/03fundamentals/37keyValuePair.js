// key/value pair
const salute = 'Wow'; // lexicon context 1

function exec() {
  const salute = 'Helooo'; // lexicon context 2
  return salute;
}

// Objects are nested groups of key/value pairs
const client = {
  name: 'Danilo',
  age: 30,
  weight: 60,
  address: {
    street: 'Avenue 5',
    number: '58',
  }
}

console.log(salute);
console.log(exec());
console.log(client);
