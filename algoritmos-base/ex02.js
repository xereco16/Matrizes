const {
    ler,
    escrever
} = require('./utils/utils');

let matrizA = [
    [,],
    [,],
    [,],
    [,]
];
let soma = 0;

for(let l = 0; l < 4; l++){
    for(let c = 0; c < 2; c++){
        matrizA[l][c] = Number(ler('Digite os numeros que quer inserir na matriz A: '));
    }
}

soma = matrizA[0][0] + matrizA[0][1] + matrizA[1][0] + matrizA[1][1] + matrizA[2][0] + matrizA[2][1] + matrizA[3][0] + matrizA[3][1];
console.log("A soma dos valores da matriz A é: " + soma);