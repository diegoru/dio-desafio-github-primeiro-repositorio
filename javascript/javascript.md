
# Introdução ao Javascript
<div id='menu'/>

## Menu

- [Introdução](#link1)
- [Estrutura de projeto](#link2)
- [Inserindo javascript numa página HTML](#link3)
- [Interagindo com os elementos DOM](#link4)
- [Criando um contador](#link5)

<div id='link1'/>

---

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
