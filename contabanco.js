var ContaBanco = /** @class */ (function () {
    function ContaBanco(conta, nome, saldo, limite) {
        this.conta = conta;
        this.nome = nome;
        this._saldo = saldo;
        this._limite = limite;
    }
    ContaBanco.prototype.getSaldo = function () {
        console.log("O saldo da conta \u00E9 de R$ ".concat(this._saldo));
    };
    ContaBanco.prototype.getLimite = function () {
        console.log("O limite de cr\u00E9dito da conta \u00E9 de R$ ".concat(this._limite));
    };
    ContaBanco.prototype.deposito = function (valor) {
        if (valor > 0) {
            this._saldo += valor;
            console.log("O novo saldo \u00E9 de R$ ".concat(this._saldo));
        }
        else {
            console.log("O valor para depósito informado é menor que zero!");
        }
    };
    ContaBanco.prototype.saque = function (valor) {
        if (valor >= this._saldo) {
            console.log("Saldo inferior ao valor informado para saque, transação não realizada");
        }
        else {
            this._saldo -= valor;
            console.log("O novo saldo \u00E9 de R$ ".concat(this._saldo));
        }
    };
    ContaBanco.prototype.emprestimo = function (valor) {
        if (valor <= this._limite) {
            this._limite -= valor;
            this._saldo += valor;
            console.log("O valor do saldo ap\u00F3s o empr\u00E9stimo de R$ ".concat(valor, " \u00E9 de ").concat(this._saldo, " e seu limite atual \u00E9 de R$ ").concat(this._limite));
        }
        else {
            console.log("Limite indisponível para essa transação");
        }
    };
    return ContaBanco;
}());
var conta1 = new ContaBanco(1, "Meydson", 1000, 1000);
function exibirConta() {
    console.log(conta1);
}
