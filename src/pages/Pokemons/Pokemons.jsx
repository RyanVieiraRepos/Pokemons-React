import './Pokemons.css'
import Card from './Card'


function Pokemons(){



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
  return(
 
 <>



  

<div className='cont'>
  <strong>Abertura da primeira temporada!</strong>
   <iframe src='./video.mp4'/>
</div>




   
  <div className='container'>{
 pokemons.slice(0, 3).map((pokemon, index)=>(
 <Card key={index} info={pokemon}/>
 ))     
}</div>
  
  <div className='container'>{
 pokemons.slice(3, 6).map((pokemon, index)=>(
 <Card key={index} info={pokemon}/>
 ))     
}</div>

<div className='container'>{
 pokemons.slice(6, 10).map((pokemon, index)=>( //o react pede que eu passe o index e uma variavel como parametro
 <Card key={index} info={pokemon}/>
 ))     
}</div>






 </>

  )
    
}

export default Pokemons