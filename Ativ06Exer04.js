// Atividade 06 Exercício 04

const ler = require('readline-sync');

let categ = ["Fantasia", "Ficcao Cientifica", "Comedia", "Drama", "Acao"];
let classif = [];

for (let i = 0; i < 5; i++) {
    let pessoal = [];
    console.log(`Usuário ${i + 1}:`);
    for (let j = 0; j < 5; j++) {
        let classifs = ler.questionInt(`Digite a Classificacao para ${categ[j]} (1 - 5): `);
        pessoal.push(classifs);
    }
    classif.push(pessoal);
}

for (let i = 0; i < 3; i++) {
    let maxima = -1;
    let preferida = -1;

    for (let j = 0; j < 3; j++) {
        if (classif[i][j] > maxima) {
            maxima = classif[i][j];
            preferida = j;
        }
    }

    console.log(`Recomendação ${i + 1}: ${categ[preferida]}!`);
}