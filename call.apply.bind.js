
//this
function imprimeNomeEmail(){
    console.log(`nome: ${this.nome}, email ${this.email}`)
   }

   const pessoa1 = {
    nome: "Ana",
    email: "a@email.com",
    imprimeInfo: imprimeNomeEmail
   }
   
   const pessoa2 = {
    nome: "Paula",
    email: "p@email.com",
    imprimeInfo: imprimeNomeEmail
   }
   
   pessoa1.imprimeInfo()
 
   pessoa2.imprimeInfo()
  
   //call
   function imprimeNomeEmail(tipoCliente){
    console.log(`${tipoCliente} - nome: ${this.nome}, email: ${this.email}`)
   }
   
   const cliente1 = {
    nome: "Carlos",
    email: "c@email.com"
   }
   
   const cliente2 = {
    nome: "Fred",
    email: "f@email.com"
   }

   imprimeNomeEmail.call(cliente1, "cliente especial")
// cliente especial - nome: Carlos, email: c@email.com

imprimeNomeEmail.call(cliente2, "cliente estudante")
// cliente estudante - nome: Fred, email: f@email.com

//apply

function imprimeNomeEmail(tipoCliente, agencia){
    console.log(`
      ${tipoCliente} da agência ${agencia}:
      - nome: ${this.nome}, email: ${this.email}
      `)
   }
   
   const cliente1 = {
    nome: "Carlos",
    email: "c@email.com"
   }
   
   const cliente2 = {
    nome: "Fred",
    email: "f@email.com"
   }

const clienteEspecial = ["cliente especial", "Rio de Janeiro"]
const clienteEstudante = ["cliente estudante", "Fortaleza"]

imprimeNomeEmail.apply(cliente1, clienteEspecial)
// cliente especial da agência Rio de Janeiro: - nome: Carlos, email: c@email.com

imprimeNomeEmail.apply(cliente2, clienteEstudante)
// cliente estudante da agência Fortaleza: - nome: Fred, email: f@email.com

//bind 

const personagem = {
    nome: "Princesa Leia",
    apresentar: function(){
      return `a personagem é ${this.nome}`
    }
   }

const personagemGenerico = personagem.apresentar
 
const personagemDefinido = personagemGenerico.bind(personagem)
console.log(personagemDefinido())

//a personagem é Princesa Leia
//Acima, utilizamos o método bind() para “ligar” a função que atribuímos a personagemGenerico ao objeto personagem. 
//Assim, sempre que esta função for executada a partir da variável personagemDefinido, a função original vai usar o objeto personagem como contexto de execução. 
//Dessa forma, this sempre se refere ao objeto personagem e é capaz de acessar suas propriedades.