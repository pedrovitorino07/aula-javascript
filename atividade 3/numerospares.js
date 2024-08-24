let soma = 0; //valor inicial de soma

for (let i = 1; i <= 20; i++) { //adiciona um valor inicial e define 20 como o numero maximo
    if (i % 2 === 0) { //verifica se é par
        soma += i; //soma o proximo resultado da soma com o proximo numero
    }
}

console.log("Soma dos números pares de 1 a 20: " + soma);