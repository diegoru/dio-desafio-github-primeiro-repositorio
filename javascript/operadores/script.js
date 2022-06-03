function soma(num1, num2){
    const iguais = num1 === num2 ? 'são' : 'não são';
    const soma = num1 + num2;
    const maior = soma > 10 ? 'maior' : 'menor';
    const menor = soma < 20 ? 'menor' : 'maior';
    const invalido = "Valores inválidos";
    
    const resultado = `Os números ${num1} e ${num2} ${iguais} iguais. Sua soma é ${soma}, que é ${maior} que 10 e ${menor} que 20.`;

     return !num1 || !num2 ? invalido : resultado;
}

console.log(soma());