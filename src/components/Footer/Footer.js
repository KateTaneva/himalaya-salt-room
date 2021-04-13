import './Footer.css';
import { Link } from 'react-router-dom';


const Footer = () => {
    return (
        <footer>

      <article className='footer-article'>
      <div className="feedback">
                <Link to="/feedback" type="submit">Feedback</Link>
            </div>
            <div className="copy-rights">&copy;HimalayanSalt&Body</div>
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
      </article>

        </footer>
    )
}

export default Footer;