class Cliente {
    constructor(nome,idade,email,saldo){
        this.nome = nome
        this.idade = idade
        this.email= email
        this.saldo = saldo
    }
    depositar(valor){
        this.saldo += valor
    }
    exibirSaldo(){
        console.log(this.saldo)
    }
}

const felipe = new Cliente("Felipe","30","holanda@email",100)

// herdando propriedades de uma classe,assim podemos criar nossas classes sem precisar ter tanto trabalho
// extends sinaliza que esta herdando de .... em super definimos quais propiedades queremos herdar
class ClientePoup extends Cliente{
    constructor(nome,idade,email,saldo,saldopoupanca){
        super(nome,idade,email,saldo,saldopoupanca)
        this.saldopoupanca = saldopoupanca
    }
    depositarpoup(valor){
        this.saldopoupanca += this.saldopoupanca
    }
}
