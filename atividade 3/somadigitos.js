let numero = 12; //pega o numero
let array = []; //array vazio
let numeroString = numero.toString(); //transforma numero em string
let soma = 0; //add valor inicial pra soma

for (let i = 0; i < numeroString.length; i++) { 
    array.push(parseInt(numeroString[i])); //transforma a string em array
} 
for (let i = 0; i < array.length; i++) { //le a array e soma os elementos
    soma += array[i]; // soma = soma + array[i]
} //soma os elementos do array
console.log(`A soma é ${soma}`);
