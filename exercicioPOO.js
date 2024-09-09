var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Animal = /** @class */ (function () {
    function Animal(idade, patas) {
        this.idade = idade;
        this.patas = patas;
    }
    return Animal;
}());
var Mamifero = /** @class */ (function (_super) {
    __extends(Mamifero, _super);
    function Mamifero(idade, patas, raca, nome) {
        var _this = _super.call(this, idade, patas) || this;
        _this._raca = raca;
        _this._nome = nome;
        return _this;
    }
    Mamifero.prototype.getRaca = function () {
        console.log(this._raca);
    };
    Mamifero.prototype.getNome = function () {
        console.log(this._nome);
    };
    Mamifero.prototype.getPatas = function () {
        console.log(this.patas);
    };
    return Mamifero;
}(Animal));
var cachorro = new Mamifero(0, 4, "Pitbull", "Rex");
function aniversario() {
    cachorro.idade += 1;
    console.log(cachorro.idade);
}
function exibir() {
    console.log(cachorro);
}
