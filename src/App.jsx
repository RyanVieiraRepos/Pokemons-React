import { useState } from 'react'
import Card from './Card.jsx'
import './App.css'


function App() {
  
   const item1 = {
  foto: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png',
  num: '#001',
  name: 'Bulbasaur',
  type: 'Grass/Poison'
}

const item2 = {
  foto: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png',
  num: '#004',
  name: 'Charmander',
  type: 'Fire'
}

const item3 = {
  foto: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png',
  num: '#007',
  name: 'Squirtle',
  type: 'Water'
}

const item4 = {
  foto: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png',
  num: '#025',
  name: 'Pikachu',
  type: 'Electric'
}

const item5 = {
  foto: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/39.png',
  num: '#039',
  name: 'Jigglypuff',
  type: 'Normal/Fairy'
}

const item6 = {
  foto: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/52.png',
  num: '#052',
  name: 'Meowth',
  type: 'Normal'
}

const item7 = {
  foto: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/133.png',
  num: '#133',
  name: 'Eevee',
  type: 'Normal'
}

const item8 = {
  foto: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/150.png',
  num: '#150',
  name: 'Mewtwo',
  type: 'Psychic'
}

const item9 = {
  foto: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/143.png',
  num: '#143',
  name: 'Snorlax',
  type: 'Normal'
}
  
const pokemons = [item1, item2, item3, item4, item5, item6, item7, item8, item9]

return(<>
  <div className='container'>{
 pokemons.slice(0, 3).map((pokemon, index)=>(
 <Card key={index} info={pokemon}/>
 ))     
}</div>
  
  <div className='container'>{
 pokemons.slice(4, 7).map((pokemon, index)=>(
 <Card key={index} info={pokemon}/>
 ))     
}</div>

<div className='container'>{
 pokemons.slice(6, 10).map((pokemon, index)=>(
 <Card key={index} info={pokemon}/>
 ))     
}</div>


</>
)


//informações declaradas acima


//rederização dessas informações e lógica abaixo


  // return(// as chaves entre as divs anunciam o uso do javascript dentro do html
            //o return anuncia um bloco de código html e js juntos(jsx)

                                                           // função anônima (parâmetro1, parâmetro2) => {}
    //<div className='container'>{pokemons.slice(0,2).map((key, index) => {
     // return (
     // <Card key= {index} info={umPokemon}/>
  // )
                                                                                  //por mais que .map já saiba qual indice está, só poderei usa-lo 
                                                                                  //caso dê o valor como parâmetro da função com o key contendo o index(indice atual) <Card key={index}/>
      
                                                                                  //aqui eu retorno o componente, que pode também ser adicionado mais lógica junto a ele
     
         
                                                                   //info é o nome de uma prop(propriedade) //para cada iteração, foi criada uma variável(umPokemon) para receber suas informações que serão exibidas
                                                                   //o info me permite preecher propridades de outro componente    //informações (interno,json,banco de dados ou api)
                                                                                                  //<Card/> foram declaradas propriedades nos seus elementos, permitindo serem completas em outro componente
                                                                                                  //<App.jsx/> o seu código busca as informações, as organiza da forma mais conveniente, e as renderiza, 
                                                                                                  //preenchendo o componente <Card/>
                                                                                                  //o info me permite preencher informações de um componente que deseja que seus elementos html por exemplo sejam preenchidos
                                                                                                  //foi criada uma variavel para receber as informãções de cada pokemon para preencher um card, isso em cada iteração
      
    
   // })}</div>
    //selecionado os três primeiros índices da array
          //para cada índice um função(bloco de código) é chamada,
  // )
     //retornar no index, o componente card, preenchido pelas informações presentes num objeto dentro do componente app.jsx

      
    
  
}

export default App
