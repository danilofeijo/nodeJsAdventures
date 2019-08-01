const sum = function (a, b) {
  return a + b
}

const mult = function (a, b) {
  return a * b
}

const subtr = (a, b) => b - a

const div = (a, b) => b / a

const printResult = function (a, b, operation = sum) {
  console.log(operation(a, b))
}

printResult(2, 8)
printResult(2, 8, mult)
printResult(2, 8, subtr)
printResult(2, 8, div)
