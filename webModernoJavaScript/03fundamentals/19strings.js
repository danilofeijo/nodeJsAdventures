const esocola = 'Cod3r';

// returns character from given position
console.log(esocola.charAt(4));
console.log(esocola.charAt(5)); // position doesn't exists

// returns character code from Unicode table
console.log(esocola.charCodeAt(3));

// returns character position
console.log(esocola.indexOf('d'));

// returns the text from given position
console.log(esocola.substring(1));

// returns a piece of text from given position
console.log(esocola.substring(1,4));

// characters concatenate
console.log('Escola '.concat(esocola).concat('!'));
console.log('Escola ' + esocola + '!');

// characters replacement
console.log(esocola.replace(3, 'e'));

// creates a new array
console.log('Danilo,Andre,Felipe,Milton'.split(','));
