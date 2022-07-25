// Funções construtoras 

function Produto(nome, preco, desconto) {
    this.nome = nome
    this.getPrecoComDesconto = () => {
        return preco * (1 - desconto)
    }
}

//OBJ em JS
p1 = new Produto('Caneta', 7.99, 0.15)
p2 = new Produto('Notebook', 2000, 0.10)
console.log(p1.getPrecoComDesconto(), p2.getPrecoComDesconto())

// Função factory 
function criandoFuncionario(nome, salarioBase, faltas) {
    return {
        nome,
        salarioBase,
        faltas,
        getSalario() {
            return (salarioBase / 30) * (30 - faltas)
        }
    }
}
const f1 = criandoFuncionario('Gabriel', 5000, 4)
console.log(f1.getSalario())