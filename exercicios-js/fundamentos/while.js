function numeroInteiro(min, max) {
    const inteiro = Math.random() * (max - min ) + min 
    return Math.floor(inteiro)
}

 let opcao = 0

while(opcao != -2) {
    opcao = numeroInteiro(-1, 10) 
    console.log(`Opção escolhida foi ${opcao}`)
}

