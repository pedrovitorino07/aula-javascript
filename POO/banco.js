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

console.log(minhaConta.#saldo);
console.log(minhaConta.getSaldo());

minhaConta.saldo = 2000;
console.log(minhaConta.getSaldo());

minhaConta.saldo = -500;
console.log(minhaConta.getSaldo());