/* // tipos primitivos

//boolean
var vOuF = false;
console.log(vOuF);
// typeof informa o tipo do dado
console.log(typeof(vOuF));

//number
var numeroQualquer = 1;
console.log(numeroQualquer);
console.log(typeof(numeroQualquer));

// string (character)
var nome = 'Diego';
console.log(nome);
console.log(typeof(nome));

// variavel null/undefined
var variavel;
console.log(variavel);
console.log(typeof(variavel));
variavel = 'Diego';
console.log(variavel);
console.log(typeof(variavel));

// uso let. Permite alteração de valor
let variavel2 = 'Diego';
console.log(variavel2);
console.log(typeof(variavel2));

variavel2 = 'JavaScript';
console.log(variavel2);

// const não pode ser alterada e é obrigatório um valor inicial (inicializa-la)

const empresa = 'TQI';
console.log(empresa);
console.log(typeof(empresa));

var escopoGlobal = 'Global';
console.log(escopoGlobal);

function escopoLocal() {
    let escopoLocalInterno = 'local';
    console.log(escopoLocalInterno);
}

escopoLocal();

//console.log(escopoLocalInterno);
// script.js:48 Uncaught ReferenceError: escopoLocalInterno is not defined

var comparacao = '0' == 0;
console.log(comparacao);

var comparacaoIdentica = '0' === 0;
console.log(comparacaoIdentica);
 */

/* // adicao
var adicao = 1 +1;
console.log(adicao);

// subtracao
var subtracao = 2 -1;
console.log(subtracao);

// multiplicacao
var multiplicacao = 2 * 3;
console.log(multiplicacao);

// divisao real
var divisaoReal = 6 / 2;
console.log(divisaoReal);

// divisai inteira
var divisaoInteira = 5 % 2;
console.log(divisaoInteira);

// petenciação
var potenciacao = 2 ** 2;
console.log(potenciacao);

// maior
var maiorQue = 5 > 2;
console.log(maiorQue);

// menor
var menorQue = 5 < 2;
console.log(menorQue);

// maior igual
var maiorOuIgual = 5 >= 2;
console.log(maiorOuIgual);

// menor igual
var menorOuIgual = 5  <= 2;
console.log(menorOuIgual); */

// e
var e = true && false;
console.log(e);

// ou
var ou = true || false;
console.log(ou);

// nao
var nao = !true;
console.log(nao);