// Atividade 06 Exercício 02

let sujeitos = ["Maria", "O Cachorro", "O Professor", "A Cidade", "Meu Amigo", "O Livro", "O Artista"];
let verbos = ["corre", "estuda", "ensina", "ama", "compra", "explora", "escreve"];
let objetos = ["o jardim", "a história", "a pintura", "o filme", "o carro", "a casa", "o computador"];

for (let i = 0; i < 5; i++) {

    let s = Math.floor(Math.random(sujeitos.length,0) * sujeitos.length - 0);
    let v = Math.floor(Math.random(verbos.length,0) * verbos.length - 0);
    let o = Math.floor(Math.random(objetos.length,0) * objetos.length - 0);

    console.log(`=> ${i+1} ${sujeitos[s]} ${verbos[v]} ${objetos[o]}`);
}