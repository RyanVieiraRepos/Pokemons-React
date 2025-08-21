import './header.css'
import {Link} from 'react-router-dom'

function Header(){


    return(

        <>
          <div className='header'>
            <div className='logo'>
              <img src='logo.png'></img>
            </div>

            <div className='navbar'>
              <Link to='Pokemons' className='link'> Pokemons</Link>
              <Link to='Sobre' className='link1'>Sobre</Link>
            </div>
            
          </div>
         
        </>
    )
}

export default Header