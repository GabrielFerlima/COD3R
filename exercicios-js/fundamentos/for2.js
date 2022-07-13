const notas = [6.7, 7.4, 9.8, 8.1, 7.7]

for(i = 0; i <= notas.length; i++ ) {
    console.log(`Total de notas é de ${notas[i]}`)
}
for(i in notas) {
    console.log(i, notas[i])
}

const pessoa = {
    nome: 'Gabriel',
    sobrenome: 'Fernandes',
    idade: 26,
    peso: 71,
}

for(atributo in pessoa) {
    console.log(`${atributo} = ${pessoa[atributo]}`)
}