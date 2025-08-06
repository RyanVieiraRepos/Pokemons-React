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


 
    function lista1(){

      
      pokemons.slice(0,2).map((umPokemon){
        return(
          <>
          <div className='container'>
             <Card info={umPokemon}/>
          </div>
          </>
        )
      })
    
}
  
     
      pokemons.map.slice(3,5)(function(umPokemon){
        return(
          <>
          <div className='container'>
             <Card info={umPokemon}/>
          </div>
          </>
        )
      })

      
    
  
     
      pokemons.map.slice(6,8)(function(umPokemon){
        return(
          <>
          <div className='container'>
             <Card info={umPokemon}/>
          </div>
          </>
        )
      })

      
    
  
}

export default App
