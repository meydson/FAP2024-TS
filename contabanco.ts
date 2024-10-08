class ContaBanco {
    public conta: number;
    public nome: string;
    private _saldo: number;
    private _limite: number;

    constructor(conta: number, nome: string, saldo: number, limite: number) {
        this.conta = conta;
        this.nome = nome;
        this._saldo = saldo; 
        this._limite = limite;
    }

    getSaldo(): void {
        console.log(`O saldo da conta é de R$ ${this._saldo}`);
    }

    getLimite(): void {
        console.log(`O limite de crédito da conta é de R$ ${this._limite}`);
    }

    deposito(valor: number): void {
        if (valor > 0) {
            this._saldo += valor;
            console.log(`O novo saldo é de R$ ${this._saldo}`);
        } else {
            console.log("O valor para depósito informado é menor que zero!")
        }
    }

    saque(valor: number): void {
        if (valor > this._saldo) {
            console.log("Saldo inferior ao valor informado para saque, transação não realizada");
        } else {
            this._saldo -= valor;
            console.log(`O novo saldo é de R$ ${this._saldo}`);
        }
    }

    emprestimo(valor: number): void {
        if (valor <= this._limite) {
            this._limite -= valor;
            this._saldo += valor;
            console.log(`O valor do saldo após o empréstimo de R$ ${valor} é de ${this._saldo} e seu limite atual é de R$ ${this._limite}`);
        } else {
            console.log("Limite indisponível para essa transação");
        }
    }
}

let conta1 = new ContaBanco(1,"Meydson",1000,1000);

function exibirConta() {
    console.log(conta1);
}