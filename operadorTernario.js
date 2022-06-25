const resultado = nota => nota >= 7 ? 'Aprovado' : 'Reprovado'

console.log(resultado(7.1))
console.log(resultado(6.5))

const resultado2 = nota2 => {
   return nota2 >= 7 ? 'Aprovado' : 'Reprovado'
}
console.log(resultado2(6))

function resultado3 (nota3) {
    return nota3 >= 7 ? 'Aprovado' : 'Reprovado'
}
console.log(resultado3(9))

let b = resultado3(9)
console.log(b)

