interface Conta {
    Numero: number;
    Saldo: number;
    Poupanca?: number;
    Render?(): void;
    Sacar(valor: number): void;
    Depositar(valor: number): void;
}

class Bra implements Conta {
    static Controle: number = 0;
    Numero: number;
    Saldo: number;

    constructor() {
        this.Numero = Bra.Controle;
        Bra.Controle += 1;
        this.Saldo = 1000;
    }

    Sacar(valor: number) {
        if (valor > this.Saldo) {
            console.log(`Saldo insuficiente, você só possui R$ ${this.Saldo} disponível em conta!`);
        } else {
            this.Saldo -= valor;
            console.log(`O novo saldo da conta é de R$ ${this.Saldo}!`);
        }
    }

    Depositar(valor: number) {
        if (valor > 1000) {
            console.log("Valor informado para depósito excede o limite de R$ 1000!");
            return
        } else (valor > 0);
            this.Saldo += valor;
            console.log(`O novo saldo é de R$ ${this.Saldo}`);
    }
}

let novaBra: object[] = [];


function CriarConta() {
    novaBra.push(new Bra);
}

function ExibirConta() {
    console.log(novaBra);
}

function ExibirSaldo() {
    //console.log(`O saldo atual da conta é de R$ ${Bra[0].Saldo}`);
}

function ExibirControle() {
    console.log(Bra.Controle);
}