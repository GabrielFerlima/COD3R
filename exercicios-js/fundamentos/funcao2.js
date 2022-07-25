const obj = {}
obj.falar = function() {return console.log('Opa')}
obj.falar()

function run (fun) {
    fun()
}

run(function() {console.log('Executando...')})

function soma(a , b , c) {
    a = a || 1 
    b = b || 1 
    c = c || 1 
    return a + b + c 
}
console.log(soma(), soma(3), soma(1, 2 ,3 ))

function soma2(a,b,c) {
    a = a !== undefined ? a : 1
    b = 1 in arguments ? b : 1 
    c = isNaN(c) ? 1 : c 
    return a + b + c 
}
console.log(soma2(), soma2(3), soma(1, 2,3 )) 

const pessoa = {
    saudacao: 'Boa noite',
     falar() {
        console.log(pessoa.saudacao)
    }
}
pessoa.falar()

function Pessoa() {
    this.idade = 0
    const self = this
    setInterval(function(){
        self.idade++
        console.log(self.idade)
    }, 1000)
}
//new Pessoa 

 function pessoa2() {
    this.idade = 0
    setInterval(()=> {
        this.idade++
        console.log(this.idade)
    },1000)
}

new pessoa2