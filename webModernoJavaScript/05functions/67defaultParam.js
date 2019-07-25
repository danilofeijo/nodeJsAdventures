// First strategy to generate default values
function firstSum(a, b, c) {
  a = a || 1
  b = b || 1
  c = c || 1

  return a + b + c
}

console.log(firstSum(), firstSum(5), firstSum(2, 3, 4), firstSum(0, 0, 0));


// Second, third and fourth strategies to generate default values
function secondSum(a, b, c) {
  a = a !== undefined ? a : 1
  b = 1 in arguments ? b : 1
  c = isNaN(c) ? 1 : c

  return a + b + c
}

console.log(firstSum(), firstSum(5), firstSum(2, 3, 4), firstSum(0, 0, 0));


// Recomended - Default strategy from ES2015
function esSum(a = 1, b = 1, c = 1) {
  return a + b + c
}

console.log(firstSum(), firstSum(5), firstSum(2, 3, 4), firstSum(0, 0, 0));
