function display() {
    console.log("Welcome TS")
}

display()

class Pessoa {
    nome: string;
    idade: number;
    estaVivo: boolean;

    constructor(nome: string, idade: number, estaVivo: boolean) {
        this.nome = nome;
        this.idade = idade;
        this.estaVivo = estaVivo;
    }

    nascer(): void {
        console.log(`${this.nome} nasceu!`)
    }

    crescer(): void {
        if (this.estaVivo) {
            this.idade++;
            console.log(`${this.nome} fez ${this.idade} anos!`);
        } else {
            console.log(`${this.nome} morreu com ${this.idade} anos`);
        }
    }

    morrer(): void {
        this.estaVivo = false;
        console.log(`${this.nome} morreu com ${this.idade}`);
    }
}

let pessoa = new Pessoa("Kurt Cobain",0,true);

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
