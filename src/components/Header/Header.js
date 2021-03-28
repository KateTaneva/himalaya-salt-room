import './Header.css';
import {Link} from 'react-router-dom';

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
                <Link to='/AboutUs'>За нас</Link>
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
        </ul>
    </nav>
            {/* <img src="https://media-cdn.tripadvisor.com/media/photo-s/07/d0/75/2b/the-salt-room-restaurant.jpg" alt="logo"></img> */}
        <button>Вход</button>
        </header>

    )

}

export default Header;