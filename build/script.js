"use strict";
function display() {
    console.log("Welcome TS");
}
display();
class Pessoa {
    constructor(nome, idade, estaVivo) {
        this.nome = nome;
        this.idade = idade;
        this.estaVivo = estaVivo;
    }
    nascer() {
        console.log(`${this.nome} nasceu!`);
    }
    crescer() {
        if (this.estaVivo) {
            this.idade++;
            console.log(`${this.nome} fez ${this.idade} anos!`);
        }
        else {
            console.log(`${this.nome} morreu com ${this.idade} anos`);
        }
    }
    morrer() {
        this.estaVivo = false;
        console.log(`${this.nome} morreu com ${this.idade}`);
    }
}
let pessoas = [];
function teste() {
    console.log(pessoas);
}
function nascer() {
    pessoas.push("Kurt Cobain", 0, true);
    pessoa.nascer();
}
function crescer() {
    pessoa.crescer();
}
function morrer() {
    pessoa.morrer();
}
//# sourceMappingURL=script.js.map