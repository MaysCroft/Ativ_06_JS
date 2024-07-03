// Atividade 06 Exercício 03

const ler = require('readline-sync');

let numeros = [], par = [], impar = [];
let num;

for (i = 0; i < 10; i++) {
    num = ler.questionInt(`${i + 1} - Digite um numero INTEIRO e POSITIVO: `);
    numeros.push(num);
}

for (let x in numeros) {

    if (x % 2 == 0) {
        par.push(numeros[x] / 2);
    } else {
        impar.push(numeros[x] * 3);
    }
}

console.log(`- Array Original: ${numeros}`);
console.log(`- Segundo Array: \n- Índice Par: ${par} \n- Índice Impar: ${impar}`);