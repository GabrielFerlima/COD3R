const palavras = ['oi', 'Olaaaar', 'paralelepipedo']

const maiorPalavra = palavras.reduce((maiorPalavra, palavraAtual) => {
    if(palavraAtual.length > maiorPalavra.lenght) {
        return palavraAtual
    }
    return maiorPalavra;
}, ''); 


















const pokemons = [ 
    {name: 'Pikachu', type: 'eletric'}, 
    {name: 'Squirtle', type: 'water'}, 
    {name: 'Magikarp', type: 'water'}, 
]

const pokemonsPorTipo = pokemons.reduce((pokemonsPorTipo, pokemonAtual)=> {
    pokemonsPorTipo[pokemonAtual.type] = pokemonsPorTipo[pokemonAtual.type] || [] 
    pokemonsPorTipo[pokemonAtual.type].push(pokemonAtual)
    return pokemonsPorTipo
}, {})

console.log(pokemonsPorTipo.eletric)