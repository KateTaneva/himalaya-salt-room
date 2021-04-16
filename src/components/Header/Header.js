import './Header.css';
import { Link } from 'react-router-dom';
    import {auth} from '../../utils/firebase';
import { useEffect } from 'react';

const Header = ({
    isAuthenticated,
    username,
}) => {
    useEffect(()=>{
        if(!isAuthenticated){
            return;
        }
        auth.currentUser.getIdToken()
        .then(function(idToken){
           return fetch('http://localhost:5001',{
            headers:{
                'Authorization': idToken
            }
            })
           
         
            })
            .then(res=>res.json())
            .then(data =>{
                console.log(data);
            })
        }, [isAuthenticated])
       
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
                        <Link to='/salt-rooms'> Солни стаи </Link>
                    </li>
                    <li>
                        <Link to="/contact-us" >Контакти</Link>
                    </li>
                </ul>
                <ul className='buttons'>
                    <li>
                        <Link to="/login" className="submit">
                            <i class="fas fa-sign-in-alt"></i> Вход </Link>
                        

                    </li>

                    <li >
                        <Link to="/register" className="submit">
                            <i class="fas fa-user"></i> Регистрация</Link>
                    </li>
                    <li>
                        <Link to="/logout" className="submit">
                            <i class="fas fa-sign-out-alt"></i> Изход</Link>
                    </li>

                </ul>
                <p className="wellcome">
                    {isAuthenticated
                        ? (<li>Добре дошли, {username}!</li>)
                        : (<li>Добре дошли!</li>)
                    }
                </p>
            </nav>

        </header>

    )

}

export default Header;