import { Link } from 'react-router-dom';

import './SaltRooms.css';

const SaltRooms = (
) => {

    return (
        <div className="wrapper-saltrooms">
            <article className="adultsRooms" >
                <h2 className="adultsRoomsTitle">Солна стая за възрастни</h2>
                <img src='https://cdn0.iconfinder.com/data/icons/man-actions/234/mother-son-growing-old-together-007-512.png' alt="adults-room"/>
                <ul>
                    <li>Продължителност: 40 мин.</li>
                    <li>Начло на всеки кръгъл час</li>
                    <li>Максимален брой души в стаята: 5</li>
                </ul>
                <Link to="/book-room" className='book-room'>Запази час</Link>
            </article>
            <article className="childrensRooms">
                <h2 className="childrensRoomsTitle">Солна стая за деца</h2>
                <img src="https://static.thenounproject.com/png/11573-200.png" alt="childrens-room"/>
                <ul>
                    <li>Продължителност: 20 мин.</li>
                    <li>Начло на всеки 30 минути</li>
                    <li>Максимален брой души в стаята: 6 деца с 6 придружители</li>
               </ul>
               <Link to="/book-room" className='book-room'>Запази час</Link>
            </article>
        </div>

    );

}
export default SaltRooms;