const cliente = {
    nome: "Andre",
    idade: 30 ,
    cpf: 09995265402 ,
    email: "andre.arthur@hotmail.com",
    fones: [87894502, 99644585] ,
    Dependentes: [
        {nome : "Eduarda",
        parentesco : "irma",
        dataNasci : "05/12/2007"} , 
        {nome : "Neto",
        parentesco : "irmao",
        dataNasci : "05/11/2001"}
    ],
    saldo:100,
    depositar: function(valor){
        this.saldo += valor
    }
}

console.log(cliente.saldo)
cliente.depositar(30),
console.log(cliente.saldo)