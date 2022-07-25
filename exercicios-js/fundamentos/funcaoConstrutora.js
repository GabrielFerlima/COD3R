function Carro (velocidadeMaxima = 200, delta = 5 ) {
    let velocidadeAtual = 0
    this.acelerar = function() {
        if(velocidadeAtual + delta <= velocidadeMaxima ) {
            velocidadeAtual += delta 
        } else {
            velocidadeAtual = velocidadeMaxima
        }
    } 

    this.getVelocidadeAtual = function () {return velocidadeAtual}
}

const ferrari = new Carro(350,20) 
ferrari.acelerar()
ferrari.acelerar()
ferrari.acelerar()
console.log(ferrari.getVelocidadeAtual())