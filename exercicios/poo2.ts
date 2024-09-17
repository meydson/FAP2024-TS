class AnimalTeste {
    cor: string;
    idade: number;
    boca: string;

    constructor() {
        this.cor = 'Marrom';
        this.idade = 2;
        this.boca = 'Grande';
    }

    Correr(): void {
        console.log("Correndo");
    }

    Dormir(): void {
        console.log("Dormindo")
    }
}

class Peixe extends AnimalTeste {
    constructor() {
        super();
    }

    Dormir(): void {
        console.log('Dormindo de olho aberto!');
        super.Dormir();
    }
}

class Morcego extends AnimalTeste {
    constructor() {
        super();
    }

    Dormir(): void {
        console.log("Dorme de cabeça para baixo!");
        super.Dormir();
    }
}

let peixe = new Peixe();
peixe.Dormir();

let morcego = new Morcego();
morcego.Dormir();