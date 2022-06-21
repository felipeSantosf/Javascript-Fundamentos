const a = {nome: "Teste"}

console.log(a)

const b = a //Atribuição por referência

console.log(b)

b.nome = "Julia"

console.log(a )

// Importante: a variavel nao guarda o valor do objeto e sim sua referência de memória


let c = 3

let d = c // Atribuição por valor

// Quando estamos trabalhando com tipos primitivos fazemos uma cópia por valor, é diferente de quando trabalhamos com objetos
 
d++

console.log(c)

