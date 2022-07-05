const pessoa = {
    nome: 'Gabriel',
    idade: 26,
    endereco: {
        logradouro: 'Rua ABC',
        numero: 84
    }
}

const { nome, idade } = pessoa 
console.log(nome, idade)

const {nome: name, idade: i} = pessoa 
console.log(name, i)

const {endereco: {logradouro, numero} } = pessoa 
console.log(logradouro, numero)