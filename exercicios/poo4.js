var Bra = /** @class */ (function () {
    function Bra() {
        this.Numero = Bra.Controle;
        Bra.Controle += 1;
        this.Saldo = 1000;
    }
    Bra.prototype.Sacar = function (valor) {
        if (valor > this.Saldo) {
            console.log("Saldo insuficiente, voc\u00EA s\u00F3 possui R$ ".concat(this.Saldo, " dispon\u00EDvel em conta!"));
        }
        else {
            this.Saldo -= valor;
            console.log("O novo saldo da conta \u00E9 de R$ ".concat(this.Saldo, "!"));
        }
    };
    Bra.prototype.Depositar = function (valor) {
        if (valor > 1000) {
            console.log("Valor informado para depósito excede o limite de R$ 1000!");
            return;
        }
        else
            (valor > 0);
        this.Saldo += valor;
        console.log("O novo saldo \u00E9 de R$ ".concat(this.Saldo));
    };
    Bra.Controle = 0;
    return Bra;
}());
var novaBra = [];
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
