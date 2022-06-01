// ----------------- ARRAYS -----------------
/* // O que são vetores ou array

// como declarar um array
let array = ['string', 1, true]
console.log(array);
 */


// pode guardar varios tipos de dados
//let array = ['string', 1, true, ['array1'], ['array2'], ['array3'], ['array4']];
// console.log(array);
// console.log(array[0]);


// Manipulando arrays

// forEach iterando array
// array.forEach(function(item, index){console.log(item, index);});

// Push adicionando item no fim do array
/* array.push('novo item');
console.log(array); */

// Pop removendo ultimo item do array ou item informado dentro da função
/* array.pop();
console.log(array); */

// shift remove item no inicio do array
/* array.shift();
console.log(array); */

// unshift adiciona item no inicio do array
/* array.unshift('novo item no inicio');
console.log(array); */

// indexOf retorna o indice de um valor
// console.log(array.indexOf(true));

// splice remove ou substitui um item pelo indice
/* array.splice(0, 3);
console.log(array); */

// slice retorna uma parte do array existente
/* novoArray = array.slice(0, 3);
console.log(novoArray); */

// ----------------- OBJETOS -----------------

let object = {string: 'string', number: 1, boolean: true, array: ['array'], objectInterno: {objectInterno: 'objeto interno'}};

console.log(object.number);

var string = object.string;
console.log(string);

var array = object.array;
console.log(array); 

object.array.forEach(function(item, index){console.log(item, index);}); 

console.log(object.objectInterno.objectInterno);

var { string, boolean, objectInterno} = object;
console.log(string, boolean, objectInterno);