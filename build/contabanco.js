"use strict";
class ContaBanco {
    constructor(conta, nome, saldo, limite) {
        this.conta = conta;
        this.nome = nome;
        this.saldo = saldo;
        this.limite = limite;
    }
    getSaldo() {
        console.log(`O saldo da conta é de R$ ${this.saldo}`);
    }
    getLimite() {
        console.log(`O limite de crédito da conta é de R$ ${this.limite}`);
    }
    deposito(valor) {
        if (valor > 0) {
            this.saldo += valor;
            console.log(`O novo saldo é de R$ ${this.saldo}`);
        }
        else {
            console.log("O valor para depósito informado é menor que zero!");
        }
    }
    saque(valor) {
        if (valor > this.saldo) {
            console.log("Saldo inferior ao valor informado para saque, transação não realizada");
        }
        else {
            this.saldo -= valor;
            console.log(`O novo saldo é de R$ ${this.saldo}`);
        }
    }
    emprestimo(valor) {
        if (valor < this.limite) {
            this.limite -= valor;
            this.saldo += valor;
            console.log(`O valor do saldo após o empréstimo de R$ ${valor} é de ${this.saldo} e seu limite atual é de R$ ${this.limite}`);
        }
        else {
            console.log("Limite indisponível para essa transação");
        }
    }
}
let conta1 = new ContaBanco(1, "Meydson", 1000, 1000);
function exibirConta() {
    console.log(conta1);
}
function exibirSaldo() {
    console.log(conta1.getSaldo());
}
function exibirLimite() {
    console.log(conta1.getLimite());
}
function deposito() {
    //let valor: number = parseInt(prompt("Informe o valor a ser depositado!"));
    conta1.deposito(500);
}
function sacar() {
    conta1.saque(200);
}
function emprestimo() {
    conta1.emprestimo(500);
}
//# sourceMappingURL=contabanco.js.map