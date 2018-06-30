
// Creating object - dynamic mode
const device = {};
device.brand = 'Apple'
device.name = 'iPad air';
device.type = 'mobile';
device.price = 2499.90;
device['personal discount'] = 19.90 // avoid spacing on attributes 

console.log(device);

// Creating object - most used mode
const car = {
  brand: 'Honda',
  name: 'Civic',
  color: 'black',
  price: 96345.00,
  country: 'japan'
}

console.log(car);

