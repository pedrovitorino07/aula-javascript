let especiais = ["@", "#", "$", "%", "&"] //predefine os caracteres especiais
let string = "@$%#" //conteudo da string

let contagem = 0 //valor inicial da contagem

for (let i = 0; i < string.length; i++) { //parametro da contagem

    let letra = string[i];
    if (especiais.includes(letra)) {
        contagem++; //incremento de caracteres especiais
    }
}

console.log(`Essa frase "${string}" tem ${contagem} caracteres especiais.`);