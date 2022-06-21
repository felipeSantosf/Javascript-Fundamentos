let valor // Não inicializada
console.log(valor)


valor = null // A varável foi inicializada mas não aponta para nenhuma objeto na memória (vazia) - Ausência de valor
console.log(valor)

//Quando for zerar uma variável do tipo referência (Aponta para um objeto, função) deve atribuir o valor null

//console.log(valor.toString()) -- Cannot read properties of null (reading 'toString') -- Cuidado ao atribuir funções a variáveis sem referência

const produto = {}
console.log(produto.preco)
console.log(produto)

produto.preco = 3
console.log(produto.preco)

produto.preco = undefined // Evite atribuir undefined 
console.log(!!produto.preco)
// delete produto.preco
console.log(produto)

produto.preco = null // sem preço
console.log(!!produto.preco)