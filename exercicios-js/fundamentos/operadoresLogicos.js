 function compras(trabalho1, trabalho2) {
    const comprarSorvete = trabalho1 || trabalho2
    const comprarTv50 = trabalho1 && trabalho2
    const comprarTv32 = trabalho1 =! trabalho2
    const manterSaudavel = !comprarSorvete
    return {comprarSorvete, comprarTv50, comprarTv32, manterSaudavel}
 }
console.log(compras(true, false))

function compras2(trab1, trab2) {
    const comprarSorvete = trab1 || trab2 
    const comprarTv50 = trab1 && trab2 
    const comprarTv32 = trab1 =! trab2 
    const manterSaudavel = !comprarSorvete
    return {comprarSorvete, comprarTv50, comprarTv32, manterSaudavel}
}

console.log((compras2(true,true)))
