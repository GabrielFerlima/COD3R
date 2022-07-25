function getPreco(imposto = 0, moeda = 'R$') {
    return `${moeda} ${this.preco * (1 - this.desconto) * (1 + imposto)}`
}

const produto = {
    nome: 'Notebook',
    preco: 4589,
    desconto: 0.15,
    getPreco
}
global.preco = 20 
global.desconto = 0.1
console.log(produto.getPreco())

const carro = { preco: 50000, desconto: 0.20}
console.log(getPreco.call(carro))
console.log(getPreco.call(carro, 0.10, '$'))
console.log(getPreco.apply(carro))