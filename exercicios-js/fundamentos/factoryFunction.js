// Factory simples/ É uma função que retorna um objeto.

function criarPessoa () {
    return {
        nome: 'Ana',
        sobrenome: 'Silva'
    }
}
console.log(criarPessoa())

function criarProduto (nome, preco) {
    return {
        nome,
        preco,
        desconto: 0.1
    }
}
console.log(criarProduto('notebook', 7000))

const criarProduto2 = criarProduto('tablet', 5000)
console.log(criarProduto2)
