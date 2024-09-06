class ContaBancaria {
    #saldo;

    constructor(saldoInicial) {
        this.#saldo = saldoInicial;
    }

    depositar(valor) {
        this.#saldo += valor;
    }

    getSaldo() {
        return this.#saldo;
    }

    set saldo(novoSaldo) {
        if (novoSaldo < 0) {
            console.log("O saldo não pode ser negativo.");
        } else {
            this.#saldo = novoSaldo;
        }
    }
}

const minhaConta = new ContaBancaria(1000);
minhaConta.depositar(500);
//forma errada
console.log(minhaConta.#saldo); //erro de sintaxe
console.log(minhaConta.getSaldo()); //1500 forma correta

minhaConta.saldo = 2000; //atualiza o saldo para 2000
console.log(minhaConta.getSaldo()); //2000

minhaConta.saldo = -500; //não permite saldo negativo
console.log(minhaConta.getSaldo()); //2000 (saldo não alterado)