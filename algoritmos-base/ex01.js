const {
    ler,
    escrever
} = require('./utils/utils');



let  matrizA = [
    [,],
    [,]
]

let matrizB = [
    [,],
    [,]
]
let matrizC = [
    [,],
    [,]
]
let numerosA
let numerosB
for(let l = 0; l < 2; l++){
    for(let c = 0; c < 2; c++){
        matrizA[l][c] = numerosA = Number(ler('Digite os numeros que quer inserir na matriz A: '));
    }
}

for(let l = 0; l < 2; l++){
    for(let c = 0; c < 2; c++){
        matrizB[l][c] = numerosB = Number(ler('Digite os numeros que quer inserir na matriz B: '));
    }
}


console.log("\nPara somar as matrizes, digite 1");
console.log("Para subtrair as matrizes, digite 2");
console.log("Para multiplicar as matrizes, digite 3");
console.log("Para dividir as matrizes, digite 4\n");

console.log("a Matriz A é: \n" + matrizA[0][0] + "|" + matrizA[0][1] + "\n" + matrizA[1][0] + "|" + matrizA[1][1]);
console.log("a Matriz B é: \n" + matrizB[0][0] + "|" + matrizB[0][1] + "\n" + matrizB[1][0] + "|" + matrizB[1][1]);

let opcao = Number(ler('Digite a opção desejada: '));
let soma = 0;
switch (opcao) {
    case 1:
        soma = matrizA[0][0] + matrizB[0][0];
        matrizC[0][0] = soma;
        soma = matrizA[0][1] + matrizB[0][1];
        matrizC[0][1] = soma;
        soma = matrizA[1][0] + matrizB[1][0];
        matrizC[1][0] = soma;
        soma = matrizA[1][1] + matrizB[1][1];
        matrizC[1][1] = soma; 
        break;
    case 2:
        soma = matrizA[0][0] - matrizB[0][0];
        matrizC[0][0] = soma;
        soma = matrizA[0][1] - matrizB[0][1];
        matrizC[0][1] = soma;
        soma = matrizA[1][0] - matrizB[1][0];
        matrizC[1][0] = soma;
        soma = matrizA[1][1] - matrizB[1][1];
        matrizC[1][1] = soma;
        break;
    case 3:
        soma = matrizA[0][0] * matrizB[0][0];
        matrizC[0][0] = soma;
        soma = matrizA[0][1] * matrizB[0][1];
        matrizC[0][1] = soma;
        soma = matrizA[1][0] * matrizB[1][0];
        matrizC[1][0] = soma;
        soma = matrizA[1][1] * matrizB[1][1];
        matrizC[1][1] = soma;
        break;
    case 4:
        soma = matrizA[0][0] / matrizB[0][0];
        matrizC[0][0] = soma;
        soma = matrizA[0][1] / matrizB[0][1];
        matrizC[0][1] = soma;
        soma = matrizA[1][0] / matrizB[1][0];
        matrizC[1][0] = soma;
        soma = matrizA[1][1] / matrizB[1][1];
        matrizC[1][1] = soma;
        break;
    default:
        break;
}

console.log("O resultado da operação é: \n"+matrizC[0][0]+"|"+matrizC[0][1]+"\n"+matrizC[1][0]+"|"+matrizC[1][1]);