// Atividade 06 Exercício 13

let matriz = [];

for (let i = 0; i < 10; i++) {
    matriz[i] = [];
    for (let j = 0; j < 10; j++) {
        matriz[i][j] = 0; 
    }
}

for (let i = 0; i < 10; i++) {
    matriz[i][i] = 1; 
    matriz[i][9 - i] = 2; 
}

console.table(matriz);