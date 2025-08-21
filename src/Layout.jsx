import Sobre from './pages/Sobre/Sobre'
import Pokemons from './pages/Pokemons/Pokemons'
import Header from './components/header'

import {Outlet} from 'react-router-dom'

function Layout(){

return(

    <>
    <Header/>
    <Outlet/>
    
    </>
)

}

export default Layout