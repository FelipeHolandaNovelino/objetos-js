const cliente = {    
    nome : "Felipe",     
    cpf : "12301457541",
    idade : 30, 
    email : "holanda.felipe@hotmail.com",
    fones : ["81858485", "85655632"],
    dependentes : [{    //aqui criamos o objeto dependentes como uma array que ira poder conter varios elementos
    nome : "Eduarda",
    parentesco : "irma",
    dataNasci : "05/12/2007"
}]
}

cliente.dependentes.push({    //adicionando um novo elemento ao objeto/array dependentes
    nome : "Neto",
    parentesco : "irmao",
    dataNasci : "05/11/2001"
})

const irmaoMaisNovo = cliente.dependentes.filter(dependentes => dependentes.dataNasci === "05/12/2007")  //aqui usamos a funcao filter para retornar qual array esta o irmao mais novo

console.log(irmaoMaisNovo[0].nome)  //aqui declaramos qual elemento queremos do irmao mais novo,no caso nome

