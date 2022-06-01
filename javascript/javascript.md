
<div id='menu'/>

## Menu

- [Introdução](#link1)
- [Estrutura de projeto](#link2)
- [Inserindo javascript numa página HTML](#link3)
- [Interagindo com os elementos DOM](#link4)
- [Criando um contador](#link5)
- [O que danado é JavaScript?](#link6)
- [Entendendo variáveis e seus valores](#link7)
- [Vetores e Objetos](#link8)
- [Estruturas condicionais](#link9)
- [Funções e suas particularidades](#link10)
- [Tipos de função](#link11)


<div id='link1'/>

---
# Introdução ao Javascript
### Stephany Nusch

 - Software Engineer @ QuintoAndar

- Formada em ADS e cursando Matemática

- Programadora há 4 anos

- Frentes de igualdade de gênero e disseminação de
conhecimento

- Gosto de música, livros e jogos

- Linkedin (Stephany Nusch), Github (stebsnusch)

---

## História

- Leve
- Interpretada

    Browser roda em tempo real
    Não precisa ser compilado

- Baseada em Protótipos

    Protótipo é como se fosse uma base para uma grande quantidade de estruturas de dados que existe no JS. É um conjunto de  funções e possibilidades em comum em todas essas estruturas de dados.

- Multiparadigma
    
    Você pode escolher se quer trabalhar com Orientação a objetos, programação funcional ou programação estruturada.

- Comumente utilizada em aplicações
web client-side

    Web client-side significa a parte de interação com o usuário.

- Segue o padrão ECMAScript

    ECMAScript é o sistema de padrões de linguagem. São normas de padronização.

## Evolução

```sequence
1997 -> Onde de fato começou a existir seguindo o padrão ECMAScript 1 

1998 -> ECMAScript 2

1999 -> ECMAScript 3
    - Regular Expressions try/catch

2009 -> ECMAScript 5
    - strict mode
    - Json support
    - String.trim()
    - Array.isArray()
    - Array Iteration Methods

2015 -> ECMAScript 6
    - Atual e com muitas novas funcionalidades
    - Praticamente são realizadas atualizações todos os anos, porém não tão impactantes 
```

## Aplicações

Pensa-se que o JS serve apenas para criação de sites, ela é a maior linguagem Web (é a linguagem da Web), porém pode ser utilizada em outras tecnologias também: 

- Web

- Mobile

- Smartwatches

- Games

- Internet of Things (IOT)

- APIs

[Voltar ao Menu](#menu)

<div id='link2'/>

---

## Estrutura de projeto

    -> Pasta do projeto
            • index.html
            -> assets
                -> css
                    • styles.css
                -> js
                    • scripts.js

[Voltar ao Menu](#menu)

---

<div id='link3'/>

## Inserindo javascript numa página HTML

```html
<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Teste</title>
    <link rel="stylesheet" href="assets/css/styles.css">
</head>
<body>
    <h1>Olá Mundo!</h1>

    <script src="assets/js/script.js"></script>    
</body>
</html>
```

[Voltar ao Menu](#menu)

---

<div id='link4'/>

## Interagindo com os elementos DOM

 DOM -> Document Object Model

Ele contêm tudo o que consta no documento(elementos html / localização / historico). 

    in: document.getElementsByTagName('h1')
    out: 
    HTMLCollection [h1]
    0: h1
    length: 1

    in: var heading1 = document.getElementsByTagName('h1')[0]
    out: undefined

    in: heading1
    out: <h1 style="color: red;">Olá Mundo!</h1>

    in: heading1.style.color = 'red'
    out: 'red'

[Voltar ao Menu](#menu)

---

<div id='link5'/>

## Criando um contador

**HTML**

```html
<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Contador</title>
    <link rel="stylesheet" href="assets/css/styles.css">
</head>
<body>
    <h1>Contador</h1>
    <p>Clique nos botões</p>
    <div id="counter">
        <button name="sutrair" onclick="decrement()">-</button>
        <span id="currentNumber">0</span>   
        <button name="adicionar" onclick="increment()" >+</button>
    </div>

    <script src="assets/js/scripts.js"></script>    
</body>
</html>
```
**CSS**

```css
@import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');

body {
    margin: 0;
    float: 0;    
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #000000;
    font-family: 'Roboto', sans-serif;
}

h1{
    font-size: 40px;
    color: #ff0d66;
    margin: 0;
    margin-top: 3rem;
    padding: 0;
    letter-spacing: 4px;
}

p {
    font-size: 16px;
    color: #FFFFFF;
    letter-spacing: 4px;
}

button {
    width: 50px;
    height: 50px;
    margin: 0 35px;
    border-radius: 50%;
    background: #474747;
    color: #ff0d66;
    font-weight: bold;
    font-size: 24px;
}

span{
    color: #FFFFFF;
    font-size: 30px;
}

```

**JavaScript**

```javascript
var currentNumberWrapper = document.getElementById("currentNumber");
var currentNumber = 0;

function increment() {
  if (currentNumber < 10) {
    currentNumber++;
    currentNumberWrapper.innerHTML = currentNumber;
  }
}

function decrement() {
  if (currentNumber > 0) {
    currentNumber--;
    currentNumberWrapper.innerHTML = currentNumber;
  }
}
```

<div id='link6'/>

## O que danado é JavaScript ?

**O que é o JS?**

JavaScript é uma linguagem de alto nível(mais próxima de linguagem humana), que integra desenvolvimento de apps e páginas web.

É uma das linguagens de programação mais usadas no mundo do desenvolvimento.

**Como Surgiu?**

Em 1995 o programador Brendan Eich que trabalhava na
Netscape, implementou uma linguagem de programação chamada
Mocha, depois o nome mudou para LiveScript, mas na época a
linguagem Java era popular, então mudaram LiveScript para
JavaScript como jogada de marketing.

A confusão entre JavaScript e Java é culpa dos marketeiros.

**Para quê serve?**

Para criar scripts dinâmicos que realizam a interação de apps ou
páginas web.

Imagina que o HTML é a estrutura, o CSS é o
design, o JavaScript é a parte interativa do
desenvolvimento.

**Onde Usar?**

Podemos usar o JavaScript de várias formas, seu uso mais comum
se dá no desenvolvimento de apps e páginas web, juntamente
com as linguagens HTML e CSS.

Nesse curso usaremos para estudar e criar projetos.

[Voltar ao Menu](#menu)

---

<div id='link7'/>

## Entendendo variáveis e seus valores

### Como funciona a tipagem em JS?

**Tipagem?**

A tipagem funciona como uma regra de uso de dados, quanto
mais forte for a tipagem, mais obrigatório é a declaração do tipo
de dado.
A tipagem em JavaScript é fraca, a declaração dos dados acontece
de modo dinâmico.

Ex.: Ao criarmos uma variável com valor entre aspas (“valor”) o
JavaScript já converte o dado para o tipo String.

```javascript
Ex.: var numero = 1;
// o JavaScript já converte o valor 1 para o tipo Number.
```
**Tipos primitivos**

As variáveis em JavaScript podem guardar tipos de dados que chamamos de tipos primitivos

Variáveis podem guardar valores dos tipos: Boolean; null; undefined; Number; String; Array; Object; Function.

**O que são variáveis?**

São dados que variam. Ora, ora Diana eu nem pensei nisso.

Imagina uma caixa, tu pode colocar quase qualquer coisa dentro dela, pode ser uma lista de nomes, cartões com números, objetos no geral...

Variáveis funcionam dessa forma Como uma caixa que guarda valores

**Declaração de variáveis**

Existem 3 modos de declarar as variáveis em JavaScript:

var – escopo global e local, pode ter seu valor alterado, se não tiver um valor inicial será tratada como null;

let – escopo local de bloco, pode ter seu valor alterado, se não tiver um valor inicial será tratada como null;

const – escopo local de bloco, somente leitura, o valor inicial é obrigatório e não pode ser alterado.

**Escopo**

O escopo em JavaScript define a limitação e visibilidade de um bloco de código.

Escopo global – quando a variável é declarada fora de qualquer bloco, sua visibilidade fica disponível em todo o código.

Escopo local – quando a variável é declarada dentro de um bloco, sua visibilidade pode ficar disponível ou não.

**Regras de Uso de Variáveis**

• Iniciar com letras, underscore _ ou cifrão $; Não iniciar com número.
Ex.: var 1nome ❌
var nome || var _nome ✔

• Não usar espaços (use o camelCase ou _);
Ex.: var nome completo ❌
var nomeCompleto || var nome_completo✔

• Não usar palavras reservadas;
Ex.: var function ❌

• Declarar variáveis no topo do bloco de código.


### Diferenças entre atribuição, comparação e comparação idêntica

**Atribuição**

O sinal de igualdade “=“ em JavaScript, significa atribuição.

Ex.:
como declarar: var nome = “meu nome”;
como ler: variável nome recebe o valor meunome;

**Comparação**

Para fazermos uma comparação de valores em JavaScript usamos “==“.

Ex.:
como declarar: "0" == 0; ;
como ler: “0” tem o valor igual a 0?

// nesse caso retorna true

**Comparação idêntica**

Para fazermos uma comparação de valores e tipos em JavaScript usamos “===“.

Ex.:
como declarar: "0" === 0; ;
como ler: “0” tem o valor e o tipo idêntico a 0?

// nesse caso retorna false

### Operadores aritméticos, relacionais e lógicos

**Operadores aritméticos**

- + adição;
- - subtração;
- * multiplicação;
- / divisão real;
- % divisão inteira;
- ** potenciação;

**Operadores relacionais**

- > maior que;
- < menor que;
- >= maior ou igual a;
- <= menor ou igual a;

**Operadores lógicos**

São tipos de operadores que consultam valores lógicos:

- && - “e” – considera que todos os valores sejam true;
- || - “ou” – considera que qualquer valor seja true;
- ! - “não” – inverte o valor de true para false ou vice-versa;

[Voltar ao Menu](#menu)

---

<div id='link8'/>

## Vetores e Objetos

**Vetores ou arrays**

Arrays são um tipo de lista, ou matriz de variáveis, onde cada variável possui um índice. Os valores podem ser de vários tipos.

Imagina que um array é uma caixa com várias outras caixas dentro e cada uma contendo algum valor;

Ex.: let array = [‘string’, 1, true...]

**Array**

O array deve ser declarado entre colchetes “[]”, e podem guardar qualquer valor dentro de seus índices: inclusive outros arrays.

Ex.: let array = ['string', 1, true, false, [‘array1], [‘array2’]...]

Obs.: O índice só é acessado por um número inteiro, onde 0 é o primeiro índice. Cada índice é separado por vírgula.

**Manipulando Arrays**

Ao ser declarado, o Array traz consigo uma série de métodos para manipulá-lo.

- forEach() – itera um array;
- push() – add item no final do array;
- pop() – remove item no final do array;
- shift() – remove item no início do array;
- unshift() – add item no início do array;
- indexOf() – retorna o índice de um valor;
- splice() – remove ou substitui um item pelo índice;
- slice() – retorna uma parte de um array existente;


**Objetos**

Dados que possuem propriedades e valores que definem suas características. Deve ser declarado entre chaves “{}”.

Ex.: imagine uma xícara azul. Ela tem cor, pode ter vários tamanhos e funções(quero cafééé). Pode ser declarada assim:

```javascript
var xicara = {
cor: ‘azul’,
tamanho: ‘p’,
funcao: tomarCafe()
}
```

**Manipulando objetos**

As propriedades de ojbetos podem ser atribuídas à variáveis, facilitando a manipulação do objeto. Chamamos isso de desestruturação.

Ex.: 

```javascript
var xicara = {cor: ‘azul’, tamanho: ‘p’, funcao: tomarCafe()}

var cor = xicara.cor;
var tamanho = xicara.tamanho;
var funcao = tomarCafe();
```
Outra forma de fazer a desestruturação é utilizando chaves ao declarar a variável:

Ex.: 

```javascript
var xicara = {cor: ‘azul’, tamanho: ‘p’, funcao: tomarCafe()}

var { cor, tamanho, funcao } = xicara;
```
[Voltar ao Menu](#menu)

---

<div id='link9'/>

## Estruturas condicionais

São instruções para realizar determinadas tarefas a partir de uma condição, seja de decisão ou repetição;

Ex.: Um jogo precisa mudar o placar toda vez que um jogador marca pontuação;

**if**

Podemos usar as palavras reservadas “if” para estabelecer uma
condição:
Ex.: 
```javascript
var jogador1 = 0;
var jogador2 = 0;

if (jogador1 > 0) {
console.log(‘jogador1 marcou ponto’);
}
// como ler: se o jogador1 tiver valor maior que 0 ele marcou ponto.
```
**else**

No caso de a condição não ser atendida podemos usar o “else” :
Ex.: 
```javascript
var jogador1 = 1;
var jogador2 = 0;

if (jogador1 > 0) {
console.log(‘jogador1 marcou ponto’);
} else {
console.log(‘ninguem marcou ponto’);
}
```
**else if**

Caso haja mais de uma condição usamos o “else if“.
Ex.: 
```javascript
var jogador1 = 1;
var jogador2 = 0;

if (jogador1 > 0) {
console.log(‘jogador1 marcou ponto’);
} else if (jogador2 > 0) {
console.log(‘jogador2 marcou ponto’);
} else {
console.log(‘ninguém marcou ponto);
}
```
**ninho de if**

Podemos também usar o “if” dentro de um outro “if”, chamamos isso de aninhamento de if’s ou ninho de if’s.
Ex.: 
```javascript
if (jogador1 = -1) {
if (jogador1 > 0) {
console.log(‘jogador 1 marcou ponto’);
} else {
console.log(‘ninguém marcou ponto’);
}
} else {
console.log(‘jogador inválido’);
}
```
**If ternário**

Podemos também fazer uma verificação em uma única linha usando o “if” ternário:

Ex.: 
```javascript
[condição] ? [instrução1] : [instrução2];

jogador1 > 0 ? console.log(‘marcou ponto’) : console.log(‘não
marcou ponto”);

// lembre de usar a interrogação “?” e dois pontos “:”
```
**Usando switch/case**

O “switch/case” funciona como uma estrutura condicional também

Ex.: 

```javascript
switch (${expressao}) {
case 1:
${instrucao};
break;
case 2:
${instrução};
break;
}
```
**Laços de repetição**

São estruturas condicionais que repetem uma instrução até atingir determinada condição:

- For;
- For/in;
- For/of;
- While;
- Do/while;

**For**

Funciona como uma repetição de instrução até que a condição
seja falsa:

```javascript
for ([expressaoInicial]; [condicao]; [incremento]) {
declaracao }

Ex.: var array = [‘valor1’, ‘valor2’, ‘valor3’, ‘valor4’]

for (let i = 0; i < array.length; i++) {
console.log(i);
}
```

**For/in**

Funciona como uma repetição a partir de uma propriedade:

```javascript
for ([indice] in [objeto ou array]) {
declaracao }

Ex.: var array = [‘valor1’, ‘valor2’, ‘valor3’, ‘valor4’]

for (i in array) {
console.log(i);
}
```
**For/of**

Funciona como uma repetição a partir de um valor:

```javascript
for ([indice] of [array]) {
declaracao }

Ex.: var array = [‘valor1’, ‘valor2’, ‘valor3’, ‘valor4’]

for (i of array) {
console.log(i);
}
```

O For/of não funciona com objetos pois as propriedades variam, diferentes do índice em um array que sempre serão números inteiros.

Mas e se eu quiser pegar o valor mesmo assim?
Ex.: 
```javascript
for (i of object.propriedade) {
console.log(i);
}
// porém cada caractere dentro do valor será Impresso em linhas separadas.
```
**While**

Executa uma instrução “enquanto” determinada condição for verdadeira, a verificação é feita antes da execução;

Ex.: 
```javascript
var a = 0;
while (a < 10) {
a++;
console.log(a);
}
// como ler: enquanto a variável a for menor que 10 ela vai receber mais um e imprimir no console.
```
**Do/while**

Executa uma instrução “até que” determinada condição seja falsa, a verificação é feita depois da execução;
Ex.: 
```javascript
var a = 0;
do {
a++;
console.log(a);
} while (a < 10)

// como ler: a variável a vai receber mais um e imprimir no console até que seu valor chegue a 10
```

[Voltar ao Menu](#menu)

---

<div id='link10'/>

## Funções e suas particularidades

**O que são funções?**

São blocos de comandos e instruções para a execução de  determinadas tarefas:

Ex.: 
```javascript
function nomeDaFuncao() {
${instrucao};
}

nomeDaFuncao();
```
**Como declarar?**

Geralmente se utiliza a palavra reservada “function” seguida de parênteses “()” e chaves “{}”:

Ex.: 

```javascript
function funcao() {
console.log(“mensagem”);
}

funcao();
```

() – indica que é um objeto do tipo function;
{} – indica que é um bloco de instrução;


**Funções com parâmetros**

As funções podem receber em sua declaração, parâmetros, que servem como variáveis, onde sua atribuição pode ser feita durante a chamada da função:

Ex.: 

```javascript
function nomeDaFuncao(parametro) {
${instrucao};
}

nomeDaFuncao(valorDoParametro);
```
**Funções com parâmetros**

Ex.: 
```javascript
function mensagem(primeiro, segundo) {
console.log(primeiro, segundo);
}

nomeDaFuncao(“Tudo certo”, “jovem!”);
```

[Voltar ao Menu](#menu)

---

<div id='link11'/>

## Tipos de função

**Funções declarativas**

São funções que possuem o uso mais comum, deve ser declarada usando a palavra reservada “function” seguida do nome da função, parênteses “()” e chaves “{}”:

Ex.: 
```javascript
function nomeDaFuncao() {
${instrucao};
}

// o nome da função é obrigatório;
```

**Expressões de Funções**

São funções atribuídas à expressões. A nomeação das funções por expressão é opcional:

Ex. 1: 

```javascript
var funcao = function nomeDaFuncao() {

${instrucao};
}

Ex. 2: var funcao = function() {

${instrucao};
};

```
**Arrow Function**

São funções de expressão de sintaxe curta. Arrow functions sempre serão anônimas, e portanto não podem ser nomeadas. deve ser declarada com parênteses "()", seguido de "=>" e depois chaves "{}"

Ex. 1: 
```javascript
var funcao = () => {
${instrucao};
}

```
**Criando uma calculadora**

Para este exercício vamos utilizar alguns métodos nativos do JavaScript:

- Number() – para converter valores em números;
- Prompt() – para registrar entradas de usuário;
- Alert() – para mostrar mensagem ao usuário;
- Template Strings – para usar strings junto com expressões;

[Voltar ao Menu](#menu)