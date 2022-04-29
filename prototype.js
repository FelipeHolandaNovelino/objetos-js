function Cliente(nome, cpf, email, saldo) {   //prototype
    this.nome = nome,
    this.cpf = cpf,
    this.email = email,
    this.saldo = saldo,
    this.depositar = function(valor){
        saldo += valor
    }
}

const andre = new Cliente("andre", "09995526402","holanda.felipe@hotmail.com", 100)

console.table(andre)

function clientePoupanca(nome,cpf,email,saldo,saldoPoup) //prototype
{
    Cliente.call(this,nome,cpf,email,saldo)
    this.saldoPoup = saldoPoup
}
const duda = new clientePoupanca("duda","05665485478","duda@gmail.com",100,200)

clientePoupanca.prototype.depositarPoup = function(valor)   //aqui adicionamos ao prototipo uma nova propiedade chamada depositarPoup que e uma funcao
{
    this.saldoPoup += valor
}

duda.depositarPoup(50)
console.table(duda)


//metodos usados antes de 2015