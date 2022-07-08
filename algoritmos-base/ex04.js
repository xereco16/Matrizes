const {
    ler,
    escrever
} = require('./utils/utils');


let matriz = [
    [,,,],
    [,,,],
    [,,,],
    [,,,]
]


let limite = 0
do {
    for (let lin = 0; lin < 4; lin++) {
        for (let col = 0; col < 4; col++) {
            let numbs = Number(ler("Digite numeros para inserir em uma matriz: "))
            matriz[lin][col] = numbs
        }
    }
    limite++
} while (limite==16);


console.log("\nEscolha uma das opções para executar na matriz 4x4 \n1 – Digite o índice da coluna que deseja verificar o total da soma dos seus elementos.\n2 - Digite o índice da linha que deseja verificar o total da soma dos seus elementos.\n3 – Digite o índice da linha e da coluna para saber qual elemento ocupa essa posição.\n4 – Calcular a soma dos elementos da diagonal principal.\n5 – Calcular a soma dos elementos da diagonal secundária.\n")

let esc = Number(ler("Escolha uma opção: "))
let soma
let result
switch (esc) {
    case 1:
        let colEsc = ler("escolha a coluna que quer somar os números: ")
        if (colEsc == 1) {
            soma = ((matriz[0][0]) + (matriz[1][0]) + (matriz[2][0]) + (matriz[3][0]));
            console.log("A soma dos numeros da coluna "+colEsc+" é igual a "+soma)
        }else if (colEsc == 2) {
            soma = ((matriz[0][1]) + (matriz[1][1]) + (matriz[2][1]) + (matriz[3][1]));
            console.log("A soma dos numeros da coluna "+colEsc+" é igual a "+soma)
        }else if (colEsc == 3) {
            soma = ((matriz[0][2]) + (matriz[1][2]) + (matriz[2][2]) + (matriz[3][2]));
            console.log("A soma dos numeros da coluna "+colEsc+" é igual a "+soma)
        }else if (colEsc == 4) {
            soma = ((matriz[0][3]) + (matriz[1][3]) + (matriz[2][3]) + (matriz[3][3]));
            console.log("A soma dos numeros da coluna "+colEsc+" é igual a "+soma)
        }else{
            console.log("OPÇÃO INVALIDA!!!")
        }
        break;
    case 2:
        let linEsc = ler("escolha a linha que quer somar os números: ")
        if (linEsc == 1) {
            soma = ((matriz[0][0]) + (matriz[0][1]) + (matriz[0][2]) + (matriz[0][3]));
            console.log("A soma dos numeros da linha "+linEsc+" é igual a "+soma)
        }else if (linEsc == 2) {
            soma = ((matriz[1][0]) + (matriz[1][1]) + (matriz[1][2]) + (matriz[1][3]));
            console.log("A soma dos numeros da linha "+linEsc+" é igual a "+soma)
        }else if (linEsc == 3) {
            soma = ((matriz[2][0]) + (matriz[2][1]) + (matriz[2][2]) + (matriz[2][3]));
            console.log("A soma dos numeros da linha "+linEsc+" é igual a "+soma)
        }else if (linEsc == 4) {
            soma = ((matriz[3][0]) + (matriz[3][1]) + (matriz[3][2]) + (matriz[3][3]));
            console.log("A soma dos numeros da linha "+linEsc+" é igual a "+soma)
        }else{
            console.log("OPÇÃO INVALIDA!!!")
        }
        break;
    case 3:
        console.log("Digite a linha e a coluna para saber o valor (entre 1 e 4)")
        let linha = Number(ler("Digite a linha: "))-1
        let coluna = Number(ler("Digite a coluna: "))-1
        console.log("O item que esta na linha "+(linha+1)+" e na coluna "+(coluna+1)+" é "+matriz[linha][coluna])
        break;
    case 4:
        console.log("A soma dos valores da diagonal principal é "+(matriz[0][0]+matriz[1][1]+matriz[2][2]+matriz[3][3]))
        break;
    case 5:
        console.log("A soma dos valores da diagonal principal é "+(matriz[0][3]+matriz[1][2]+matriz[2][1]+matriz[3][0]))
        break;
}