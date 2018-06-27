let isActive = false;
console.log(isActive);

isActive = true;
console.log(isActive);

isActive = 0
console.log(!!isActive);

console.log('The true guys...');
console.log(!!3);
console.log(!!-1);
console.log(!!' ');
console.log(!!'text');
console.log(!![]);
console.log(!!{});
console.log(!!Infinity);
console.log(!!(isActive = true));

console.log('The false guys...');
console.log(!!0);
console.log(!!'');
console.log(!!null);
console.log(!!NaN);
console.log(!!undefined);
console.log(!!(isActive = false));

console.log('To finish...');
console.log(!!('' || 0 || null));

// empty value
let userName = '';

// common value
// let userName = 'Danilo';
console.log(userName || 'User not found :(')
