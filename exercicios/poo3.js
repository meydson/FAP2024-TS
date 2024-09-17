var Conta = /** @class */ (function () {
    function Conta() {
        this.Numero = Conta.numeroDeContas;
        this.Saldo = 1000;
    }
    Conta.prototype.Sacar = function (valor) {
        if (valor <= this.Saldo) {
            this.Saldo -= valor;
            console.log("O novo saldo \u00E9 de R$ ".concat(this.Saldo));
        }
        else {
            console.log("O valor informado para saque é maior que o saldo da conta!");
        }
    };
    Conta.prototype.Depositar = function (valor) {
        if (valor <= 1000) {
            this.Saldo += valor;
            console.log("O novo saldo da conta \u00E9 de R$ ".concat(this.Saldo));
        }
        else {
            console.log("O valor máximo de depósito é de R$ 1000");
        }
    };
    Conta.numeroDeContas = 0;
    return Conta;
}());
var conta = new Conta();
function MostrarConta() {
    console.log(conta);
}
