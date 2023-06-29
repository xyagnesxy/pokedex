
const nome = document.querySelector('.pokemon_name')
const numero = document.getElementsByClassName('pokemon_number')
const imagem = document.querySelector('.pokemon_image')
const botaoNext = document.querySelector('.btn-next')
const botaoPrev = document.querySelector('.btn-prev')
const form = document.querySelector('.form')
const input = document.querySelector('.input_search')
let searchPokemon = 1//o número que aparece do lado do nome
async function buscar(pokemon){//retorna uma promisse
    const resultado =await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
    if(resultado.status==200){
        const resultadoJs = await resultado.json()
        return resultadoJs
    }

    
}

async function renderizarPokemon(pokemon){
    nome.innerHTML = 'Carregando'
    numero[0].innerHTML = ''

        const dados = await buscar(pokemon)
        if(dados){
            searchPokemon = dados.id
        nome.innerHTML = dados.name
        numero[0].innerHTML = dados.id
        imagem.style.display='block'
        imagem.src = dados.sprites['versions']['generation-v']['black-white']['animated'].front_default
        input.value=''
        }else{
            imagem.style.display='none'
            nome.innerHTML = 'Não encontrado'
            numero[0].innerHTML = ''
        }

        
 
        
}



form.addEventListener('submit', (evento)=>{
    evento.preventDefault()
    renderizarPokemon(input.value.toLowerCase())



    //o evento submit recarregaria a página. o .prevendDefault impede isso. Acho que é isso
    // esse é um jeito de chamar a renderizarPokemon quando o cara apertar enter
    })

    renderizarPokemon(searchPokemon)

botaoNext.addEventListener('click', ()=>{
    searchPokemon++;
    renderizarPokemon(searchPokemon)
})

botaoPrev.addEventListener('click', ()=>{
    if(searchPokemon>1){
        searchPokemon--;
        renderizarPokemon(searchPokemon)
    }
    

})