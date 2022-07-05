const nomeCompleto = {}
nomeCompleto.nome = 'Gabriel'
nomeCompleto.sobrenome = "Fernandes"
nomeCompleto.sobrenome2 = "Lima"
console.log(nomeCompleto)

function Obj(nome) {
    this.nome = nome 
    this.exec = function () {
     console.log('Feijoada')
    }
}
const obj2 = new Obj('cadeira')

console.log(obj2.nome)
obj2.exec()
