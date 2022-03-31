const cliente = {    
    nome : "Felipe",     
    cpf : "12301457541",
    idade : 30, 
    email : "holanda.felipe@hotmail.com"   
}

const chaves = ["nome", "idade", "cpf", "email"] //para poder usar a lista de chaves junto com o objeto cliente nao podemos usar cliente.chave e sim temos q usar[]

//console.log(cliente[chaves[0]])  //exemplo usando um indice de chaves

chaves.forEach(info => console.log(cliente[info])) //exemplo de um  forEach em um objeto sendo que info sera cada indice da array chaves
        