// Atividade 06 Exercício 12

const ler = require('readline-sync');

let ativs = [];
let total = 0;
let sugest;

console.log("--------------- TESTE DE IMPACTO AMBIENTAL ---------------");
console.log("- Essa é uma simulação para verificar a gravidade de \n  Impacto Ambiental em certas areas de seu dia a dia: ");

console.log("----------------------------------------------------------");
let nome = ler.question("- Informe seu Nome: ");
let transp = ler.questionInt("- Impacto Ambiental na area de Transporte: ");
let energ = ler.questionInt("- Impacto Ambiental na area de Energia: ");
let agua = ler.questionInt("- Impacto Ambiental na area de Agua: ");
console.log("----------------------------------------------------------");

ativs.push({nome: nome, transp: transp, energ: energ, agua: agua});
console.log("-----------------------------------------------------------");

for (let ativ in ativs) {
    total = ativs[ativ].transp + ativs[ativ].energ + ativs[ativ].agua;
}

if (total >= 1000) {
    sugest = "- Impacto Ambiental MUITO ALTO. Procure meios para ajudar o meio ambiente";
} else if (total >= 400 && total <= 999) {
    sugest = "- Impacto Ambiental MODERADO. Você pode melhorar!";
} else {
    sugest = "- Impacto Ambiental BAIXO. Continue assim, o meio ambiente agradece!";
}
    
console.log(`- ${nome} - Impacto Total: ${total}`);
console.log(sugest);