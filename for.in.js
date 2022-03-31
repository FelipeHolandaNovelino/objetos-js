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
let relatorio = " " ;

for(let info in cliente){
    if(typeof cliente[info] === "object" || typeof cliente[info] === "function") {
        continue
    } else{
    relatorio +=`
    ${info} ==> ${cliente[info]}`
}
}
console.log(relatorio)