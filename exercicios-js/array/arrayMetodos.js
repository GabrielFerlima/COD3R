const pilotos = ['Vettel', 'Alonso', 'Raikkonen', 'Massa']
pilotos.pop() // Remove o ultimo elemento da lista 
console.log(pilotos)

pilotos.push('Verstappen') // Adiciona um elemento a lista 
console.log(pilotos)

pilotos.shift() // Remove o primeiro elemento da lista
console.log(pilotos)

pilotos.unshift('Hamilton') // Adiciona um elemento na primeira posição da lista
console.log(pilotos)

pilotos.splice(2,0, 'Bottas', 'Massa') //Primeiro vc add o indice, segundo se deleta algo e assim add outros element.

console.log(pilotos)

const algunsPilotos = pilotos.slice(2) // novo array gerado 
console.log(algunsPilotos)