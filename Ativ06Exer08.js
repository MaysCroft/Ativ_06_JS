// Atividade 06 Exercício 08

const ler = require('readline-sync');

let biblioteca = [];
let titulo, autor, anopubli;
let check = true;

console.log("--------------- BIBLIOTECA DIGITAL: LIBROTECH ---------------");
while (check) {

    console.log("-------------------------------------------------------------");
    titulo = ler.question("- Informe o Titulo da Obra \n  ou 'SAIR' para finalizar: ").toUpperCase();

    if (titulo === 'SAIR') {
        check = false;
    } else {
        autor = ler.question("- Informe Autor: ").toUpperCase();
        anopubli = ler.questionInt("- Informe Ano de Publicacao: ");
        console.log("-------------------------------------------------------------");
        biblioteca.push({titulo: titulo, autor: autor, anopubli: anopubli});
    }
}
console.log("-------------------------------------------------------------");

console.log("- Dados Gravados com Sucesso!");
for (let bibli of biblioteca) {
    console.log(`=> ${bibli.titulo}, ${bibli.autor}, ${bibli.anopubli}`);
}

console.log("-------------------------------------------------------------");

console.log("- Deseja Organizar Obras por? \n- 1. Titulo da Obra \n- 2. Ano de Publicação");
let perg = ler.question("=> ");

if (perg === '1') {
    biblioteca.sort((a, b) => a.titulo.localeCompare(b.titulo));
    console.table(biblioteca);
} else if (perg === '2') {
    biblioteca.sort((a, b) => a.anopubli - b.anopubli);
    console.table(biblioteca);
} else {
    console.log("- Opção Inválida!");
}