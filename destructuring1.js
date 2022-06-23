// novo recurso do ES2015

const pessoa = {
    nome: 'Ana',
    idade: 5,
    endereco: {
        logradouro: 'Rua ABC',
        numero: 1000
    }
}


const {nome, idade} = pessoa //Extrai de dentro do objeto pessoa os atributos nome e idade
console.log(nome, idade)


console.log(pessoa)


const {nome: n, idade: i} = pessoa //Extrai de dentro do objeto pessoa os atributos nome e idade e atribui em uma variavel
console.log(n, i)

const {sobrenome, bemHumorada = true} = pessoa //Tenta extrair, se n tiver retorna true na 2 opção
console.log(sobrenome, bemHumorada)

const {conta: {ag, num}} = pessoa //Retorna erro pois não é possivel retornar atributos de algo que é undefined ou null
console.log(ag, num)