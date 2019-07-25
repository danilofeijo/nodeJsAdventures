// Function is First-Class object (Citizens)
// Higher-order function

// create in a literal format
function fun1() { }

// Store a function in a variable
const fun2 = function () { }

// Store a function in an array
const arrayContent = [function(a, b) { return a + b }, fun1, fun2]
console.log(arrayContent[0](2,3))

// Store a function in an object's attibute
const myObj = {}
myObj.scream = function() {return 'Hello World!'}
console.log(myObj.scream())

// Pass a function as param
function run (fun) {
  fun()
}

run(function () { console.log('Executing...') })

// One function can return/contain another function
function sum(a, b) {
  return function (c) {
    console.log(a + b + c);
  }
}

sum(1, 2)(3)
const complexSum = sum(1, 2)
complexSum(3)
