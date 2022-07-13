function soBoaNotica(nota) {
    if(nota >= 7) {
        console.log("Aprovado com " + nota)
    }
}

soBoaNotica(7.1)

function seForVerdade(valor) {
   
    if(valor = false) {
        console.log('Feijoada ')
    } else {
        console.log('Macarronada ')
    }
}
seForVerdade(true) // Aqui vc chama function diretamente, pois ela ja tem o console.log dentro.