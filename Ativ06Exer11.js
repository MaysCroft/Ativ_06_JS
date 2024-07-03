// Atividade 06 Exercício 11

const ler = require('readline-sync');

let alfbet = [
    ['A', 'B', 'C', 'D', 'E'],
    ['F', 'G', 'H', 'I', 'J'],
    ['K', 'L', 'M', 'N', 'O'],
    ['P', 'Q', 'R', 'S', 'T'],
    ['U', 'V', 'W', 'X', 'Y']
];

console.log("---------- MATRIZ JOGO DE PALAVRAS ----------");
console.table(alfbet);
console.log("---------------------------------------------");

let msgoculta = [];

let qtd = ler.questionInt("- Selecione a quantidade de caracteres \n  para sua Mensagem Oculta: ");

for (let i = 0; i < qtd; i++) {
    let linha = ler.questionInt(`${i + 1} - Informe Linha (0 - 4): `);
    let colun = ler.questionInt(`${i + 1} - Informe Coluna (0 - 4): `);

    if (linha >= 0 && linha < 5 && colun >= 0 && colun < 5) {
        msgoculta.push(alfbet[linha][colun]);
    } else {
        console.log("- Uh Oh! Tente outra vez!");
        i--; 
    }
}

console.log("- Mensagem Oculta: " + msgoculta);