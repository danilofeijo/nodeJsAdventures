function schoolGrades(proofNote) {
  if (proofNote >= 7) {
    console.log('Approved!')
  } else {
    console.log('Rejected!')
  }
}

schoolGrades(7.0)
schoolGrades(7.1)
schoolGrades(6.9)
schoolGrades('Oops!') // Be careful 
