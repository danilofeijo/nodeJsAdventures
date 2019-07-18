const schoolGrade = function (proofNote) {
  switch (Math.floor(proofNote)) {
    case 10:
    case 9:
      console.log('WOW! --> ' + proofNote)
      break;
    case 8: case 7:
      console.log('Approved! --> ' + proofNote)
      break;
    case 6: case 5: case 4: case 3: case 2: case 1: case 0:
      console.log('Not Approved! --> ' + proofNote)
      break;
    default:
      console.log('The value ' + proofNote + ' is not valid')
      break;
  }
}

schoolGrade(0)
schoolGrade(6.9)
schoolGrade(7.9)
schoolGrade(9.9)
schoolGrade(11.9)
