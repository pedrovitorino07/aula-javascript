class Funcionario { //classe funcionarios de uma empresa ficticia
    constructor(nome, salario) { //determinha os construtores 
        this.nome = nome;
        this._salario = salario;  // ._salario -> deixa como uma propriedade interna
    }

    funcao() {
        console.log('O funcionario faz isso.'); //polimorfismo para um funcionario qualquer
    }
    getFuncionario() {
        return this.nome; //retorna o nome dos funcionarios da empresa
    }

    get salario() {
        return this._salario; //retorna os salarios
    }

    set salario(novoSalario) { //seta o salario de um funcionario
        if (novoSalario <= 0) { // se o salario for menor ou igual a 0
            console.log("Escravidão!"); // devolve isso e o salario não é alterado
        } else {
            this._salario = novoSalario; // caso não entre naquelas condições o salario passa e é alterado
        }
    }
}

class Designer extends Funcionario { //herançazinha dos funcionarios, sendo designer ou engenheiro
    funcao() { // retorna a função do designer na empresa
        console.log('O designer desenvolve interfaces.');
    }

    contratacao() { //caso seja adicionado um new Designer, podemos entender como uma nova contratação e o js devolve isso 
        console.log(`${this.nome} é nosso novo designer!`);
    }
}

class Engenheiro extends Funcionario {
    funcao() { // retorna a função do engenheiro na empresa
        console.log('O engenheiro constrói o software.');
    }

    contratacao() { // faz a mesma coisa do designer
        console.log(`${this.nome} é nosso novo engenheiro!`);
    }
}

const engenheiroCivil = new Engenheiro('Lucas'); // adiciona uma "nova contratação" sendo uma de engenheiro
engenheiroCivil.contratacao(); // printa a linha 44

const Funcionarios = [ // seta um array de funcionarios que trabalham na empresa, seus nomes e salarios
    new Designer('João', 5000),
    new Engenheiro('Maria', 6000),
    new Designer('Pedro', 4500)
];

Funcionarios.forEach(funcionario => { //o js retorna o nome de todos os empregados, que estão na lista do array
    console.log(funcionario.getFuncionario()); // console mostra separadamente, os contratados
});

Funcionarios.forEach(funcionario => { // pega cada valor ligado aos funcionarios 
    console.log(`Nome: ${funcionario.nome}, Função: ${funcionario.constructor.name},  Salário: ${funcionario.salario}`); // retorna, o nome de cada um, sua função, no caso designer ou engenheiro e seu salario
});

Funcionarios[0].salario = 0; //tenta atualizar o salario para do funcionario posição 0 no array
Funcionarios[1].salario = 7000; // atualiaz o salariodo funcionario posição 1
console.log(`Novo salário de João: ${Funcionarios[0].salario}`); // mostra o mesmo salario, por conta do salario ter sido atualizado para 0, ele cai no if e else, e é mantido
console.log(`Novo salário de Maria: ${Funcionarios[1].salario}`); // mostra a atualizção do salario
