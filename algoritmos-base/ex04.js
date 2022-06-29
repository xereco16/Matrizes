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


console.log(matriz)
console.log(matriz[0][0])
console.log(matriz[1][0])
console.log(matriz[2][0])
console.log(matriz[3][0])



console.log("\nEscolha uma das opções para executar na matriz 4x4 \n1 – Digite o índice da coluna que deseja verificar o total da soma dos seus elementos.\n2 - Digite o índice da linha que deseja verificar o total da soma dos seus elementos.\n3 – Digite o índice da linha e da coluna para saber qual elemento ocupa essa posição.\n4 – Calcular a soma dos elementos da diagonal principal.\n5 – Calcular a soma dos elementos da diagonal secundária.\n")

let esc = Number(ler("Escolha um número: "))
let soma

switch (esc) {
    case 1:
        let colEsc = ler("escolha a coluna que quer somar os números: ")
        switch (colEsc) {
            case 1:
                soma = ((matriz[0][0]) + (matriz[1][0]) + (matriz[2][0]) + (matriz[3][0]));
                escrever(soma)
                break;
            case 2:
                
                break;
            case 3:
                
                break;
            case 4:
                
                break;
        
            default:
                break;
        }
        break;
    case 2:

        break;

    default:
        break;
}