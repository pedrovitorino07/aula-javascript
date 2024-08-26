
let pessoa = { //objeto
    nome: "Pedro",
    idade: 19,
    profissao: "Desenvolvedor",
    saudacao: function () {
        console.log("Olá, meu nome é " + this.nome); //this. : referencia para um objeto
    }

};
/*
pessoa.saudacao(); //chama o objeto e a função 


let outraPessoa = {
    nome: "Ana",
    idade: 25,
    saudacao: pessoa.saudacao //chama a função
};

outraPessoa.saudacao(); //chama o método da outra pessoa usando o nome da função sem usar ()
*/

console.log(pessoa.nome);
console.log(pessoa["idade"]); //chama somente um objeto especifico
pessoa.saudacao();

pessoa.email = "pedro@gmail.com"; //add novo atributo
console.log(pessoa.email); //saida de atributo

delete pessoa.profissao; //deleta atributo
console.log(pessoa.profissao); //saida de atributo

pessoa.idade = 20; //atualiza atributo
console.log(pessoa.idade); 

/*
console.log(texto.toUpperCase()); //converte a string toda em maiusculo 
console.log(texto.toLowerCase()); //converte a string toda em minusculo

palavra.slice(1); //retorna uma palavra especifica da string

console.log(frase.substring(0, 4)); //pega uma string e retorna somente de onde esta demarcado 
console.log(frase.replace('javascript', 'java')); //troca uma palavra da string por outra

*/

