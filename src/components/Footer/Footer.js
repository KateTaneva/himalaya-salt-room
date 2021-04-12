import './Footer.css';
import { Link } from 'react-router-dom';


const Footer = () => {
    return (
        <footer>

            <div className="feedback">
                <Link to="/feedback" type="submit">Обратна връзка</Link>
            </div>
            <div className='footer-list-div'>

                <ul className='footer-list'>
                    <li>
                        <i class="fab fa-instagram"></i>
                    </li>
                    <li>
                        <i class="fab fa-facebook"></i>
                    </li>
                    <li>
                        <i class="fab fa-twitter"></i>
                    </li>
                    <li>
                        <i class="fab fa-google-plus-g"></i>
                    </li>
                </ul>
            </div>

        </footer>
    )
}

export default Footer;