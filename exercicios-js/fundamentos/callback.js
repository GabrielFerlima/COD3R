const fabricantes = ["Mercedes", "Audi", "BMW"]

function imprimir(nome, indice) {
    console.log(`${indice + 1}. ${nome}`)
}
fabricantes.forEach(imprimir)

notas = [6, 5, 3, 10, 25, 15, 14 ]
const notasBaixas = notas.filter( (notas) => {
    return notas < 7
})
console.log(notasBaixas)

numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const numerosFiltragem = numeros.filter((numeros) => {
    if(numeros.length > 11) {
        console.log('Correto')
    } else {
        console.log('Incorreto')
    }
})
console.log(numerosFiltragem)