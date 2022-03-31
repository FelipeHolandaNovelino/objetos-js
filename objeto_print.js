const cliente = {    
    nome : "Felipe",     
    cpf : "12301457541",
    idade : 30, 
    email : "holanda.felipe@hotmail.com"   //Lembro que uma string "" e algo proximo a um array de caracteres
}
console.log(cliente.nome)
console.log(`Meu nome e ${cliente.nome} e minha idade e ${cliente.idade} anos`)

console.log(cliente.cpf.substring(0,3))   //substring traz pra gente a faixa de caracteres que queremos de uma string no exemplo queremos os 3 primeiros caracteres ,(0,3) comeca em zero e termina no 3 elemento contando com o zero
 //o resultado aqui sera 123