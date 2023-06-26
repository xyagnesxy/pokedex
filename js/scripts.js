
const nome = document.querySelector('.pokemon_name')
const numero = document.getElementsByClassName('pokemon_number')
const imagem = document.querySelector('.pokemon_image')

const fprm = document.querySelector('.form')

async function buscar(pokemon){//retorna uma promisse
    const resultado =await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)


    const resultadoJs = await resultado.json()
    
    return resultadoJs
}

async function renderizarPokemon(pokemon){
    const dados = await buscar(pokemon)

    nome.innerHTML = dados.name
    numero[0].innerHTML = dados.id
    imagem.src = dados.sprites['versions']['generation-v']['black-white']['animated'].front_default
}