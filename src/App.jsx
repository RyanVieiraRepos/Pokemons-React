import{BrowserRouter, Routes, Route} from 'react-router-dom'

import Layout from './Layout'
import Pokemons from './pages/Pokemons/Pokemons'
import Sobre from './pages/Sobre/Sobre'


function App() {

  return(
  <BrowserRouter>
<Routes>
   <Route  path="/" element={<Layout/>}>
      <Route index element={<Pokemons/>}/>
      <Route path='Pokemons' element={<Pokemons/>}/>
      <Route path='Sobre' element={<Sobre/>}/>
      <Route path='*' element={<Pokemons/>}/>
   </Route>

</Routes>

</BrowserRouter>
  )
}

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
    
      
    
  


export default App
