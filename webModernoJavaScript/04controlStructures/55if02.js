function noBrackets(value) {
  if (value > 7) // It doesn't work. Always use {} for more than one line of code
    console.log(value)
    console.log('Approved')
}

noBrackets(5)
noBrackets(8)

function whySemicolon(value) {
  if (value > 7); { // It doesn't work. Be carefull with ';' 
    console.log(value)
  }

}

whySemicolon(5)
whySemicolon(8)
