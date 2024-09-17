interface Bra {
    Numero: number;
    Saldo: number;
    Sacar(valor: number): void;
    Depositar(valor: number): void;
}

class Conta implements Bra {
    private static numeroDeContas: number = 0;
    Numero: number;
    Saldo: number;

    constructor() {
        this.Numero = Conta.numeroDeContas;
        this.Saldo = 1000;
    }

    Sacar(valor: number): void {
        if (valor <= this.Saldo) {
            this.Saldo -= valor;
            console.log(`O novo saldo é de R$ ${this.Saldo}`);
        } else {
            console.log("O valor informado para saque é maior que o saldo da conta!")
        }
    }

    Depositar(valor: number): void {
        if (valor <= 1000) {
            this.Saldo += valor;
            console.log(`O novo saldo da conta é de R$ ${this.Saldo}`);
        } else {
            console.log("O valor máximo de depósito é de R$ 1000");
        }
    }
}

let conta = new Conta();

function MostrarConta() {
    console.log(conta);
}