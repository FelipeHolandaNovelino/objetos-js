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
    }                   //object.entries(cliente) cria uma array para cada elemento do objeto exemplo ['nome','andre'] ....
}                     //object.values(cliente) cria uma array com os valores das keys de um objeto
//const propCliente = Object.keys(cliente); //object.key cria um array com todas as chaves do objeto. exemplo ['nome','idade','cpf','email','fones','Dependentes','saldo','depositar']

function oferecerSeguro(obj) {
    const propClientes = Object.keys(obj);
    if(propClientes.includes("Dependentes")) //includes verifica em uma array se contem o que voce colocou nomo parametro ()
    {
        console.log(`Oferta de Seguro de vida para ${obj.nome} `)
    }
}

oferecerSeguro(cliente)