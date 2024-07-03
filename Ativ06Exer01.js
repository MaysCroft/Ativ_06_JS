// Atividade 06 Exercício 01

const ler = require('readline-sync');

let playlist = [];
let musica, artista, duracao, tempototal = 0;
let check = true;

console.log("--------------- CRIE AQUI SUA PLAYLIST ---------------");
while (check) {

    console.log("------------------------------------------------------");
    musica = ler.question("- Informe o Titulo da Musica \n  ou 'SAIR' para finalizar: ").toUpperCase();

    if (musica === 'SAIR') {
        check = false;
    } else {
        artista = ler.question("- Informe Artista: ").toUpperCase();
        duracao = ler.questionFloat("- Informe Duracao em Minutos: ");
        console.log("------------------------------------------------------");
        playlist.push({musica: musica, artista: artista, duracao: duracao});
        tempototal += duracao;
    }
}
console.log("------------------------------------------------------");

console.log(`---------------------------- PLAYSLIST CRIADA ----------------------------`);
for (let play of playlist) {
    console.table(`=> Musica: ${play.musica}, Artista: ${play.artista}, Duração: ${play.duracao}`);
}
console.log(`=> A playlist completa oferece uma viagem musical de ${tempototal} minutos.`);
console.log(`--------------------------------------------------------------------------`);