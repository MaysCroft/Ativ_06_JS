// Atividade 06 Exercício 10

let inst = ["Cruz Vermelha", "Medicos sem Fronteiras", "Unicef"];

let doacao = [
    {nome: "Ana"    , valor: 1557.50},
    {nome: "Pedro"  , valor: 2230.00},
    {nome: "Maria"  , valor: 1976.81},
    {nome: "João"   , valor: 1445.67},
    {nome: "Sophia" , valor: 300.00},
    {nome: "Lucca"  , valor: 1889.78},
    {nome: "Laura"  , valor: 1789.00},
    {nome: "Matheus", valor: 1487.65},
    {nome: "Julia"  , valor: 1521.09}
];

console.log("------- ÚLTIMAS DOAÇÕES -------");
console.table(doacao);

let soma = 0;

for (let i = 0; i < doacao.length; i++) {
    soma += doacao[i].valor;
}

console.log(`- Doação Total: R$ ${soma}`);

let media = soma / 3;

console.log(`- Valor para a Instituição Cruz Vermelha: R$ ${media.toFixed(2)}`);
console.log(`- Valor para a Instituição Médicos sem Fronteiras: R$ ${media.toFixed(2)}`);
console.log(`- Valor para a Instituição Unicef: R$ ${media.toFixed(2)}`);