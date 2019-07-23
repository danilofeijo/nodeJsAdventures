// While counter
let counter = 1

while (counter <= 5) {
  console.log(`While counter = ${counter}`)
  counter++
}

// For counter
for (let i = 1; i <= 5; i++) {
  console.log(`For counter = ${i}`)
}

// For to list classroom notes 
const proofNotes = [7.4, 4.3, 6.1, 9.5, 3.2]

for (let i = 0; i < proofNotes.length; i++) {
  console.log(`Classroom note ${i+1} = ${proofNotes[i]}`);
}
