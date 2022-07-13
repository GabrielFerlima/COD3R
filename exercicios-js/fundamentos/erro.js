function imprimirNomeCaps(obj) {
   try {
       console.log(obj.nome.toUpperCase()+ '!!!')
   } catch(e) {
    function tratarError(e) { throw new Error('Digite o nome correto!') }
    tratarError(e)
   }
}
const obj = {name: 'Gabriel'}
imprimirNomeCaps(obj)