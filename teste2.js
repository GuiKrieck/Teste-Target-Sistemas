/*2) Dado a sequência de Fibonacci, onde se inicia por 0 e 1 e o próximo valor sempre será a soma dos 2 valores 
anteriores (exemplo: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...), escreva um programa na linguagem que desejar onde, 
informado um número, ele calcule a sequência de Fibonacci e retorne uma mensagem avisando se o número informado pertence ou não a sequência.*/

//f(N)={1,1,2,3,5,8,13,21,34,55,89,144,233,377 para consulta

let numeroInformado = 145;
let soma = 0;
let primeiroNumero = 0;
let segundoNumero = 1;
let isFibonacci = false

if (numeroInformado === 0 || numeroInformado === 1) {
    isFibonacci = true;
} else {
    while (soma < numeroInformado){
        soma = primeiroNumero + segundoNumero
        primeiroNumero = segundoNumero;
        segundoNumero = soma;
        
        if(soma === numeroInformado){
            isFibonacci = true;
            break
        }
    }
}

if(isFibonacci){
    console.log(`O número informado (${numeroInformado}) pertence a sequência de Fibonacci`);
} else{
    console.log(`O número informado (${numeroInformado}) não pertence a sequência de Fibonacci`);
}