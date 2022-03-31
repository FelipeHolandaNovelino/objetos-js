const cliente = {    
    nome : "Felipe",     
    cpf : "12301457541",
    idade : 30, 
    email : "holanda.felipe@hotmail.com"   
};

console.log(cliente) 

cliente.fone = "84556565";  //metodo de criacao de um novo campo em um objeto

console.log(cliente)

cliente.fone = "45214586"  //Se tentarmos adicionar um campo que ja existe ele vai apenas substituir o atual

console.log(cliente)