class Animal {
    constructor(nome, idade, especie) {
        this.nome = nome;
        this.idade = idade;
        this.especie = especie;
    }

    falar() {
        console.log(`${this.nome} faz um som.`);
    }

    dormir() {
        console.log(`${this.nome} está dormindo.`);
    }

    info() {
        console.log(`Nome: ${this.nome}, Idade: ${this.idade}, especie: ${this.especie}`);
    }

}

class Cachorro extends Animal {
    constructor(nome, idade, especie, raca) {
        super(nome, idade, 'Cachorro'); // Chama o construtor da classe Animal com "Cachorro"
        this.raca = raca;
    }

    falar() {
        console.log(`${this.nome} late.`);
    }

    buscarBola() {
        console.log(`${this.nome} está buscando bola.`);
    }

    info() {
        super.info(); //chama o método info da classe Animal
        console.log(`Raça: ${this.raca}`);
    }
}

const meuCachorro = new Cachorro('Rex', 5, 'Labrador');

meuCachorro.falar(); // Rex late.
meuCachorro.dormir(); // Rex está dormindo.
meuCachorro.buscarBola(); // Rex está buscando bola.
meuCachorro.info();