// Atividade 06 Exercício 14

const ler = require('readline-sync');

let opcao, avaliacao, selecao, categoria;
let soma = 0;
let check = true;

let filmes = [
    { titulo: "Tomb Raider"  , avaliacoes: [], media: 0 },
    { titulo: "As Branquelas", avaliacoes: [], media: 0 },
    { titulo: "Harry Potter" , avaliacoes: [], media: 0 }
];

while (check) {
    console.log("-------------------- FILMES DISPONÍNEIS --------------------");
    filmes.forEach((filme, index) => {
        console.log(`${index + 1}. ${filme.titulo} - Avaliação Média: ${filme.media}`);
    });
    console.log("------------------------------------------------------------");

    opcao = ler.questionInt("- Escolha um Filme para avaliar ou digite 0 para SAIR: ");

    if (opcao === 0) {
        check = false;
    }

    if (opcao < 1 || opcao > filmes.length) {
        console.log("- Opção Inválida!");
        continue;
    }

    avaliacao = ler.questionInt("- Sua Avaliacao para esse Filme (1 - 5): ");

    if (avaliacao < 1 || avaliacao > 5) {
        console.log("Avaliacao invalida. Tente novamente.");
        continue;
    }

    selecao = filmes[opcao - 1];
    selecao.avaliacoes.push(avaliacao);

    for (let avaliacao of selecao.avaliacoes) {
        soma += avaliacao;
    }
    selecao.media = (soma / selecao.avaliacoes.length).toFixed(2);

    switch (avaliacao) {
        case 1:
        case 2:
            categoria = "- RUIM -";
            break;
        case 3:
            categoria = "- MEDIO -";
            break;
        case 4:
        case 5:
            categoria = "- OTIMO -";
            break;
        default:
            categoria = "- NÃO DEFINIDO -";
    }

    console.log(`------------------------------------------------------------`);
    console.log(`- Você avaliou o filme "${selecao.titulo}" como ${categoria}`);
    console.log(`------------------------------------------------------------`);
}

console.clear();
console.log("---------- Avaliacoes Finais: ----------");
console.table(filmes);