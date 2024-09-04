/*
5) Escreva um programa que inverta os caracteres de um string.

IMPORTANTE:
a) Essa string pode ser informada através de qualquer entrada de sua preferência ou pode ser previamente definida no código;
b) Evite usar funções prontas, como, por exemplo, reverse;*/

const string1 = "seu texto aqui"
const string2 = "seu texto aqui"

function reverseString(string){
    let stringInvertida = "";

    for(let i = string.length -1; i >= 0; i--){
        stringInvertida += string[i];
    }

    return stringInvertida
}

function reverseStringArray(string){
    let stringArray = string.split("");
    let inicio = 0;
    let fim = stringArray.length - 1;
    let temp;

    while (inicio < fim){
        temp = stringArray[inicio];
        stringArray[inicio] = stringArray[fim];
        stringArray[fim] = temp;
        inicio++;
        fim--;    
    }

    return stringArray.join("");
}

const stringInvertida1 = reverseString(string1);
const stringInvertida2 = reverseStringArray(string2);

console.log(stringInvertida1);
console.log(stringInvertida2);