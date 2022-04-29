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
let relatorio = " " ;// variavel onde ficara o meu resultado

for(let info in cliente){  //for in -pra cada propriedade de um objeto -info é cada key
    if(typeof cliente[info] === "object" || typeof cliente[info] === "function") {  //typeof diz o tipo do dado ,typeof cliente[info] = qual o tipo do dado de cliente[info]
        continue
    } else{
    relatorio +=`
    ${info} ==> ${cliente[info]} 
     `  //exemplo  relatorio += `nome ==> cliente.nome`
}
}
console.table(relatorio)  //console.table exibe no console o objeto como uma planilha