// Atividade 06 Exercício 09

const ler = require('readline-sync');

let ranking = [];
let nick, ponto;
let check = true;

console.log("--------------- RANKING NACIONAL SILVERMOON ONLINE ---------------");
while (check) {

    console.log("------------------------------------------------------------------");
    nick = ler.question("- Informe o Nick do Jogador \n  ou 'SAIR' para finalizar: ").toUpperCase();

    if (nick === 'SAIR') {
        check = false;
    } else {
        ponto = ler.questionInt("- Informe a Pontuacao: ");
        console.log("------------------------------------------------------------------");
        ranking.push({nick: nick, ponto: ponto});
    }
}
console.log("------------------------------------------------------------------");

console.log("- Dados Gravados com Sucesso!");

let ordem_desc = ranking.sort((x,y) => y.ponto - x.ponto);

for (let i = 0; i < ranking.length; i++) {
    console.log(`=> ${ordem_desc[i].nick} - ${ordem_desc[i].ponto}`);
}