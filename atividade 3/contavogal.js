let vogais = ["a", "e", "i", "o", "u"] //predefine as vogais
let string = "pedro lindo" //conteudo da string

let contagem = 0 //valor inicial de vogais

for (let i = 0; i < string.length; i++) { //parametro de vogais

    let letra = string[i];
    if (vogais.includes(letra)) {
        contagem++; //incremento de vogai
    }
}

console.log(`String "${string}" tem ${contagem} vogais.`);