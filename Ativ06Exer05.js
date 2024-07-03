// Atividade 06 Exercício 05

console.log("********** LISTA DE COMPRAS DO MÊS **********");

let carrinho = {
    limpezacasa: [
        {nome: "Pinho-Sol GD", preco: 5.99, qtd: 1},
        {nome: "Detergente", preco: 2.95, qtd: 6}
    ],
    higiene: [
        {nome: "Sabonete Alma de Flores", preco: 0.55, qtd: 10},
        {nome: "Creme H. Monange Rosa", preco: 8, qtd: 2}
    ],
    alimento: [
        {nome: "Arroz Integral 5Kg", preco: 20.99, qtd: 4},
        {nome: "Feijão Preto 1Kg", preco: 6, qtd: 3},
        {nome: "Extrato de Tomate ELEFANTE", preco: 10.55, qtd: 3},
        {nome: "Farofa Cara Pa Krai", preco: 40, qtd: 3}
    ],
};

let totalgeral = 0;

for (let categ in carrinho) {

    let totalcat = 0;

    for (let produto of carrinho[categ]) {
        totalcat += produto.preco * produto.qtd;
    }

    console.log(`- Total da Categoria ${categ}: R$ ${totalcat.toFixed(2)}`);
    
    totalgeral += totalcat;
}
console.log("*********************************************");

console.log(`- Total Geral do Carrinho de Compras: R$ ${totalgeral.toFixed(2)}`);