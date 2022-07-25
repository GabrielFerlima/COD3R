// coleção de chave valores.*
const produto = new Object 
produto.nome = 'Gabriel'
produto['marca do produto'] = 'genérica'
produto.preco = 220 

console.log(produto)
delete produto.preco 

const carro = {
    modelo: 'A4',
    valor: 89000,
    proprietario: {
        nome: 'Raul',
        idade: 56,
        endereco: {
            logradouro: 'Rua ABC',
            numero: 123
        }
    },
    condutores: [{
        nome: 'Junior',
        idade: 19
    }, {nome:'Ana', idade: 42 }],
    calcularValorSeguro: () => {
        //...
    }

}
carro.proprietario.endereco.numero = 1000
carro.proprietario.endereco.logradouro = 'Av Gigante'
console.log(carro)