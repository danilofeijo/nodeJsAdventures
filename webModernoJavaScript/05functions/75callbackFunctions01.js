const carBrands = ['Mercedes', 'BMW', 'Audi']

function printBrands(name, counter) {
  console.log(`${counter+1}. ${name}`)
}

carBrands.forEach(printBrands)
carBrands.forEach((brand) => console.log(brand))

// forEach seems to have default params:
// First param --> Array Value
// Second param --> Array Index
