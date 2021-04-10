import { Link } from 'react-router-dom';
import './BookSaltRoom.css';

const BookSaltRoom = () => {
    return (
        <div className='book-salt-room-div'>
            <h1>Запазване на час</h1>
            <section className="book-salt-room-wrapper">

                <Link to='#' className="book-adults-room">
                    <ul>
                        <li><span>Солна стая за възрастни</span></li>
                        <li><img src='https://cdn0.iconfinder.com/data/icons/man-actions/234/mother-son-growing-old-together-007-512.png' /></li>
                    </ul>
                </Link>
                <Link to='#' className='book-childrens-room'>
                    <ul>
                        <li><span>Солна стая за деца</span></li>
                        <li><img src="https://static.thenounproject.com/png/11573-200.png" /></li>
                    </ul>

                </Link>
            </section>
        </div>
    )

}
export default BookSaltRoom;