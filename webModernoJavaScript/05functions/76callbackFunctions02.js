const proofNotes = [6.9, 8.3, 4.6, 9.4, 2.6]

// Default alternative
const belowAverage1 = []

for (let i in proofNotes) {
  if (proofNotes[i] < 7) {
    belowAverage1.push(proofNotes[i])
  }
}
console.log(belowAverage1)

// Callback alternative
const belowAverage2 = proofNotes.filter(function (proofNotes) {
  return proofNotes < 7
})
console.log(belowAverage2)

// Callback alternative with arrow function
const belowAverage3 = proofNotes.filter(proofNotes => proofNotes < 7)
console.log(belowAverage3)
