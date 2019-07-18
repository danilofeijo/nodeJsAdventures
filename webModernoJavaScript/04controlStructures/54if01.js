function schoolGrades(proofNote) {
  if (proofNote >= 7) {
    console.log('Aproved with: ' + proofNote)
  }
}

function showIfTtrue(value) {
  if (value) {
    console.log(value + ' is true')
  }
}

schoolGrades(6.9)
schoolGrades(8.1)

showIfTtrue(false)
showIfTtrue(true)
showIfTtrue(0)
showIfTtrue(1)
showIfTtrue(-1)
showIfTtrue('')
showIfTtrue('a')
showIfTtrue(' ')
showIfTtrue()
