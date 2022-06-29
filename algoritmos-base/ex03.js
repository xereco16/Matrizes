const {
    ler,
    escrever
} = require('./utils/utils');


let matriz = [
    ["","",""],
    ["","",""],
    ["","",""]
]


let limite = 0
do {
    for (let lin = 0; lin < 3; lin++) {
        for (let col = 0; col < 3; col++) {
            let names = String(ler("Digite nomes para inserir em uma matriz: "))
            matriz[lin][col] = names
        }
    }
    limite++
} while (limite==9);

let linha
let coluna

let findNames = String(ler("digite um nome para saber seu posição n matriz: "))
for (let lin = 0; lin < 3; lin++) {
    for (let col = 0; col < 3; col++) {
        if (matriz[lin][col]==findNames) {
            linha = lin + 1
            coluna = col + 1
        }
    }   
}

console.log(findNames+" esta na linha "+linha+" e na coluna "+coluna)

