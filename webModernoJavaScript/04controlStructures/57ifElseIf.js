Number.prototype.between = function (begin, end) {
  return this >= begin && this <= end
}

function schoolGrade(proofNote) {
  if (proofNote.between(9, 10)) {
    console.log('WOW! --> ' + proofNote)
  } else if (proofNote.between(7, 8.9)) {
    console.log('Approved --> ' + proofNote)
  } else if (proofNote.between(0, 6.9)) {
    console.log('Rejected --> ' + proofNote)
  } else {
    console.log('Invalid value --> ' + proofNote)
  }
}

schoolGrade(0)
schoolGrade(6.9)
schoolGrade(7.9)
schoolGrade(9.9)
schoolGrade(10.9)
