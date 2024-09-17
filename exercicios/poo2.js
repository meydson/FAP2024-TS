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
var AnimalTeste = /** @class */ (function () {
    function AnimalTeste() {
        this.cor = 'Marrom';
        this.idade = 2;
        this.boca = 'Grande';
    }
    AnimalTeste.prototype.Correr = function () {
        console.log("Correndo");
    };
    AnimalTeste.prototype.Dormir = function () {
        console.log("Dormindo");
    };
    return AnimalTeste;
}());
var Peixe = /** @class */ (function (_super) {
    __extends(Peixe, _super);
    function Peixe() {
        return _super.call(this) || this;
    }
    Peixe.prototype.Dormir = function () {
        console.log('Dormindo de olho aberto!');
        _super.prototype.Dormir.call(this);
    };
    return Peixe;
}(AnimalTeste));
var Morcego = /** @class */ (function (_super) {
    __extends(Morcego, _super);
    function Morcego() {
        return _super.call(this) || this;
    }
    Morcego.prototype.Dormir = function () {
        console.log("Dorme de cabeça para baixo!");
        _super.prototype.Dormir.call(this);
    };
    return Morcego;
}(AnimalTeste));
var peixe = new Peixe();
peixe.Dormir();
var morcego = new Morcego();
morcego.Dormir();
