let aprovados = ['Bia', 'Carlos', 'Ana']
console.log(aprovados)
console.log(aprovados[0])
aprovados[3] = 'Paulo'
console.log(aprovados[3])

aprovados.push('Abia')
console.log(aprovados.length)

aprovados2 = ['Ingrid', 'Diego', 'Mauricio', 'Douglas']
aprovados2.splice(1, 1, 'Fernandes') // Tanta pode deletar como add um novo elemento no array.
console.log(aprovados2)