// Formas de exportar em node
this.ola = 'Fala pessoal'
exports.Bemvindo = 'Bem vindo ao node !'
module.exports.ateLogo = 'Até a próxima exemplo' 

//Forma mais comum 
module.exports = {
    bomDia: 'Bom dia', 
    boaNoite() {
       return 'Boa noite'
    }
}