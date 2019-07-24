const allNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

for (let x in allNumbers) {
  if (x == 5) {
    console.log(`Found the parameter ${x}, its value is ${allNumbers[x]}`);
    break
  }
  console.log(`${x} = ${allNumbers[x]}`);
}


const per = [2, 4, 6, 8, 9, 10]

for (let x in per) {
  if (per[x] % 2 != 0) {
    console.log(`There is an odd number here --> ${per[x]}`);
    break
  }
  console.log(`${x} = ${per[x]}`);
}


const odd = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

for (let y in odd) {
  if (odd[y] % 2 == 0) {
    console.log(`This is not an odd number: ${odd[y]}`);
    continue
  }
  console.log(`${y} = ${odd[y]}`);
}
