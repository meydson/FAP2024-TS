class Animal {
    public idade: number;
    protected patas: number;

    constructor(idade: number,patas:number){
        this.idade = idade;
        this.patas = patas;
    }
}

class Mamifero extends Animal {
    private _raca: string;
    private _nome: string;

    constructor(idade: number, patas: number, raca: string, nome: string){
        super(idade,patas)
        this._raca = raca;
        this._nome = nome;
    }

    public getRaca(): void {
        console.log(this._raca);
    }

    public getNome(): void {
        console.log(this._nome);
    }

    public getPatas(): void {
        console.log(this.patas);
    }
}

let cachorro = new Mamifero(0, 4, "Pitbull", "Rex");

function aniversario() {
    cachorro.idade += 1;
    console.log(cachorro.idade); 
}

function exibir() {
    console.log(cachorro);
}