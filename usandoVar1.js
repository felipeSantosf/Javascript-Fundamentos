{
    {
        {
            {

                var sera = "Será?"
                console.log(sera)

            }
        }
    }
}


console.log(sera)  // Uma variável dentro de um bloco que não seja uma função estará acessível fora do bloco


function teste() {
    var local = 123
    console.log(local)
}

teste()
console.log(local) // Variavel criada dentro de uma função estará acessível apenas dentro da função


// FUJA DO ESCOPO GLOBAL