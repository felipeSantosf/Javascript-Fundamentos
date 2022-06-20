const peso1 = 1.1
const peso2 = Number("2.0")


console.log(peso1, peso2)
console.log(Number.isInteger(peso1))
console.log(Number.isInteger(peso2))


const av1 = 9.234
const av2 = 4.455


const total = av1 * peso1 + av2 * peso2
const media = total/ (peso1 + peso2)

console.log(media.toFixed(2))
console.log(media.toString())
console.log(typeof media)
console.log(typeof Number)



// Uma variável possui um certo tipo de dado, e utilizamos as funções vinculadas ao tipo de dado através do . (ponto)