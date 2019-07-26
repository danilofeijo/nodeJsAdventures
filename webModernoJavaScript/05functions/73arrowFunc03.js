const obj = {}

// Compare this using traditional function
let compareThis = function (param) {
  console.log(this === param)
}

compareThis(global) // true

compareThis = compareThis.bind(obj)

compareThis(global) // false
compareThis(obj) // true


// Compare this using arrow function
let compareThisArrow = (param) => console.log(this === param)

compareThisArrow(global) // false
compareThisArrow(module.exports) // true


// Compare this using arrow function and bind
compareThisArrow = compareThisArrow.bind(obj)
compareThisArrow(obj) // false
