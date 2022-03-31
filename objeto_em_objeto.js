const cliente = {    
    nome : "Felipe",     
    cpf : "12301457541",
    idade : 30, 
    email : "holanda.felipe@hotmail.com",
    fones : ["81858485", "85655632"]
}

cliente.dependentes = {  //criando um novo objeto dentro de um objeto
    nome : "Eduarda",
    parentesco : "irma",
    dataNasci : "05/12/2007"
}

console.log(cliente)

cliente.dependentes.nome = "Eduarda Holanda";

console.log(cliente)