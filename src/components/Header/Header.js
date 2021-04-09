import './Header.css';
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom'

const Header = ({
    isAuthenticated,
    username,
}) => {
    return (
        <header id="site-header">
            <nav className='header-nav'>
                <img src='https://pbs.twimg.com/profile_images/1063137797022928899/IXg2rAMv_400x400.jpg' alt='logo'></img>
                <ul className='header-list'>
               
                    <li>
                        <Link to="/" >Начало</Link>
                    </li>
                    <li>
                        <Link to='/characteristics' >Характеристики</Link>
                    </li>
                    <li>
                        <Link to='/SaltRooms'> Солни стаи </Link>
                    </li>
                    <li>
                        Масажи
            </li>
                    <li>
                    <Link to="/contact-us" >Контакти</Link>   
            </li>
                    <li >
                        <Link to="/login" className="submit">
                            <i class="fas fa-sign-in-alt"></i> Вход
              </Link>
                        <Link to="/register" className="submit">
                            <i class="fas fa-user"></i> Регистрация
              </Link>
                        <Link to="/logout" className="submit">
                            <i class="fas fa-sign-out-alt"></i> Излизане
                </Link>
                    </li>
                    {isAuthenticated
                ? <li>Welcome, {username}!</li>
                : <li>Welcome, Guest!</li>
              }
                </ul>
            </nav>

        </header>

    )

}

export default Header;