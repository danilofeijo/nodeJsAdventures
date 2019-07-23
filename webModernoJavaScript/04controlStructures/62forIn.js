// For to list classroom notes 
const proofNotes = [7.4, 4.3, 6.1, 9.5, 3.2]

for (let i in proofNotes) {
  // console.log(`Classroom note ${i+1} = ${proofNotes[i]}`); // It doesn't work
  console.log(`Classroom note ${i} = ${proofNotes[i]}`);
}


const people = {
  firstName: 'Danilo',
  lastName: 'Feijó',
  age: 31
}

for (let attribute in people) {
  console.log(`${attribute}: ${people[attribute]}`);
}
