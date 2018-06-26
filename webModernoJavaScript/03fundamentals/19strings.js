const esocola = 'Cod3r';

// retorna o caractere da posição informada
console.log(esocola.charAt(4));
console.log(esocola.charAt(5)); // posição inexistente nessa variável

// retorna código do caractere na tabela Unicode
console.log(esocola.charCodeAt(3));

// retorna posição do caractere informado
console.log(esocola.indexOf('d'));

// retorna o texto a partir da posição informada
console.log(esocola.substring(1));

// retorna parte do texto a partir da posição informada
console.log(esocola.substring(1,4));

// Concatenação de caracteres
console.log('Escola '.concat(esocola).concat('!'));
console.log('Escola ' + esocola + '!');

// Troca caractere
console.log(esocola.replace(3, 'e'));

// Cria um array 
console.log('Danilo,Andre,Felipe,Milton'.split(','));
