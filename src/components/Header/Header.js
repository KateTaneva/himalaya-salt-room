import './Header.css';
import {Link} from 'react-router-dom';
import {NavLink} from 'react-router-dom'

const Header = () => {
    return (
        <header id="site-header">
           <nav className='header-nav'>
        <img src='https://pbs.twimg.com/profile_images/1063137797022928899/IXg2rAMv_400x400.jpg' alt='logo'></img>
        <ul className='header-list'>
            <li>
                <Link to="/" >Начало</Link>
            </li>
            <li>
                <NavLink activeClassName="nav-link-selected" to='/AboutUs'>За нас</NavLink>
            </li>
            <li>
               <Link to='#'> Солни стаи </Link>                   
            </li>
            <li>
                Масажи                   
            </li>
            <li>
                Контакти                    
            </li>
            <li><button>Вход</button></li>
        </ul>
    </nav>
        
        </header>

    )

}

export default Header;