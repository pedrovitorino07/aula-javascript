/*
function soma() {

    return 5 + 2
}

console.log(soma())

function subtracao() {

    return 5 - 2
}

console.log(subtracao())


function soma(valor1, valor2, valor3) {

    return valor1 + valor2 + valor3
}

console.log(soma(3, 3, 5))


function div(valor1, valor2) {

    return valor1 / valor2
}

console.log(div(10, 3))


function fruta(fruta) {
    let text = '';
    if (fruta == 'abacaxi') {
        text = 'Abacaxi é um fruto azedo'
    } else if (fruta == 'melancia') {
        text = 'Melancia é um fruto doce'
    } return text
}

console.log(fruta('pera'));


function getSizes(alt, lar, com) {
    let area = alt * lar
    let volume = alt * lar * com
    let sizes = [area, volume]
    return sizes
}

console.log(getSizes(3, 3, 2))
console.log(getSizes(3, 3, 2)[0])
console.log(getSizes(3, 3, 2)[1])


function mult(num) {
    for (let i = 1; i <= 10; i++) {
        console.log(`${i} x ${num} =${num * i}`)
    }
}
function soma(num) {
    for (let i = 1; i <= 10; i++) {
        console.log(`${i} + ${num} = ${num + i}`)
    }
}

mult(3);
soma(3);

function pularnumero(num) {
    for (let i = 0; i <= 10; i++) {
        if (i === num) {
            continue;
        }
        console.log(`O número é ${i}`)
    }
}

pularnumero(5);
*/

function soma(array) { //somar elementos de um array
    let soma = 0
    for (let numero of array) {
        soma = soma + numero
    }
    return soma
}

console.log(soma([1, 2, 3, 4, 5])) 