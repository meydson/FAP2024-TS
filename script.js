function display() {
    console.log("Welcome TS");
}
display();
var Pessoa = /** @class */ (function () {
    function Pessoa(nome, idade, estaVivo) {
        this.nome = nome;
        this.idade = idade;
        this.estaVivo = estaVivo;
    }
    Pessoa.prototype.nascer = function () {
        console.log("".concat(this.nome, " nasceu!"));
    };
    Pessoa.prototype.crescer = function () {
        if (this.estaVivo) {
            this.idade++;
            console.log("".concat(this.nome, " fez ").concat(this.idade, " anos!"));
        }
        else {
            console.log("".concat(this.nome, " morreu com ").concat(this.idade, " anos"));
        }
    };
    Pessoa.prototype.morrer = function () {
        this.estaVivo = false;
        console.log("".concat(this.nome, " morreu com ").concat(this.idade));
    };
    return Pessoa;
}());
var pessoa = new Pessoa("Kurt Cobain", 0, true);
function teste() {
    console.log(pessoa);
}
function nascer() {
    pessoa.nascer();
}
function crescer() {
    pessoa.crescer();
}
function morrer() {
    pessoa.morrer();
}
