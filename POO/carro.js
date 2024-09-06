class Carro {
    constructor(marca, modelo) {
        this.marca = marca;
        this.modelo = modelo;
    }

    detalhes() {
        return `Marca: ${this.marca}, Modelo: ${this.modelo}`;
    }
    detalhes2() {
        return `Modelo: ${this.modelo}, Marca: ${this.marca}`;
    }
}

const meuCarro = new Carro('Toyota', 'Corolla');
console.log(meuCarro.detalhes());

const meuCarro2 = new Carro('Ford', 'Mustang');
console.log(meuCarro2.detalhes2());