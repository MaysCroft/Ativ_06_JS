// Atividade 06 Exercício 07

let assentos = [
    ["DISP","DISP","DISP","DISP","DISP","DISP","DISP","DISP","DISP","DISP"],
    ["DISP","DISP","DISP","DISP","DISP","DISP","DISP","DISP","DISP","DISP"],
    ["DISP","DISP","DISP","DISP","DISP","DISP","DISP","DISP","DISP","DISP"],
    ["DISP","DISP","DISP","DISP","DISP","DISP","DISP","DISP","DISP","DISP"],
    ["DISP","DISP","DISP","DISP","DISP","DISP","DISP","DISP","DISP","DISP"],
    ["DISP","DISP","DISP","DISP","DISP","DISP","DISP","DISP","DISP","DISP"],
    ["DISP","DISP","DISP","DISP","DISP","DISP","DISP","DISP","DISP","DISP"],
    ["DISP","DISP","DISP","DISP","DISP","DISP","DISP","DISP","DISP","DISP"],
    ["DISP","DISP","DISP","DISP","DISP","DISP","DISP","DISP","DISP","DISP"],
    ["DISP","DISP","DISP","DISP","DISP","DISP","DISP","DISP","DISP","DISP"]
];

const ler = require('readline-sync');
let check = true;

console.log("---------- BEM VINDO A MAJESTIC MOVIES ----------");
while (check) {
    console.log("---------------------- MENU ---------------------");
    console.log("- 1. Vizualizar Assentos ------------------------");
    console.log("- 2. Reservar Assento ---------------------------");
    console.log("- 3. Sair do Sistema ----------------------------");
    console.log("-------------------------------------------------");
    let opt = ler.questionInt("=> ");

    switch (opt) {
        case 1:
            console.clear();
            console.table(assentos);
            break;

        case 2:
            let fila = ler.questionInt("- Selecione Fileira: ");
            let cade = ler.questionInt("- Selecione Cadeira: ");
            for (let i = 0; i < assentos.length; i++) {
                for (let j = 0; j < assentos[i].length; j++) {
                    if (assentos[fila][cade] === "OCUP") {
                        console.log(`- Fileira - ${fila} - e Cadeira - ${cade} - OCUPADA.`);
                        i = assentos.length;
                        break;
                    } else {
                        console.log(`- Fileira - ${fila} - e Cadeira - ${cade} - RESERVADA.`);
                        assentos[fila][cade] = "OCUP";
                        i = assentos.length;
                        break;
                    }
                }
            }
            break;

        case 3:
            check = false;
            console.log("- Updating Database, please wait...");
            console.table(assentos);
            console.log("- Saindo do Sistema, obrigado pela preferência!");
            break;
    
        default:
            console.log("---------------- Opção Inválida! ----------------");
            break;
    }
}