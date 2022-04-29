const cliente = [{
    nome: "Andre",
    idade: 30 ,
    cpf: 09995265402 ,
    email: "andre.arthur@hotmail.com",
    fones: [87894502, 99644585] ,
    dependentes: [
                {nome : "Eduarda",
                 parentesco : "irma",
                dataNasci : "05/12/2007"} , 
                {nome : "Neto",
                parentesco : "irmao",
                dataNasci : "05/11/2001"}
            ]
    }, 
      {
        nome: "Joana",
        idade: 32 ,
        cpf: 09995265602 ,
        email: "joana.andrade@hotmail.com",
        fones: [87894502, 99644585] ,
        dependentes: [
            {nome : "Eduardo",
            parentesco : "irmao",
            dataNasci : "05/12/2007"} , 
            {nome : "luiz",
            parentesco : "irmao",
            dataNasci : "05/11/2001"}
        ]
      }
]

 // ... = operador de espalhamento. Cria uma array  com elementos selecionados de objetos distintos. 
 //Este operador copia as propriedades de objetos para outros, “espalhando” os conteúdos.
 //exemplo, posso selecionar a chave dependentes com seus elementos dos dois objetos a cima e criar uma array com seu conteudo 

 const listaDependentes = [...cliente[0].dependentes, ...cliente[1].dependentes]

 console.table(listaDependentes)