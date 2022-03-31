const colecionador = {
    nome: "João do Gibi",
    idade:41,
    tipocolecao: ["quadrinhos"],
    contato: "joao@email.com",
    adicionarTipo:function(propriedade,tipo){
        this[propriedade].push(tipo)
    }
}

console.log(colecionador)  //#Primeiro console.

for(i = 0; i < 4; i++) {
    colecionador.adicionarTipo("tipocolecao","HQ"+i)
}

console.log(colecionador) //#Segundo console.