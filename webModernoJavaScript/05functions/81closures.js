// Closuro é o escopo criado quando uma função é declarada
// Esse escopo permite a função acessar e manipular variáveis externas à função

const x = 'Global'

function outside() {
  const x = 'Local'
  function inside() {
    return x
  }
  return inside
}

const myFunc = outside()
console.log(myFunc());