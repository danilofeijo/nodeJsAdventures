function area(heigh, width) {
  const area = heigh * width
  if (area >= 20) {
    console.log(`Area is over than required: ${area}m2`);
  } else {
    return area
  }
}

console.log(area(2, 3))
console.log(area(2))
console.log(area())
console.log(area(2, 3, 4, 5, 6))
console.log(area(4, 6))
