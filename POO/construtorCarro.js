class Carro {
    #carro;
    #modelo;
    #ano;

    constructor(carro, modelo, ano) {
        this.#carro = carro;
        this.#modelo = modelo;
        this.#ano = ano;
    }

    getAno() { return this.#ano; }

    set ano(ano) {
        if (ano < this.#ano) {
            console.log("O carro ta ultrapassado!");
        } else {
            this.#ano = ano;
        }
    }
}

const meuCarro = new Carro("Fusca", "1970", 1980);

meuCarro.ano = 1970

console.log(meuCarro.getAno()); // 1980