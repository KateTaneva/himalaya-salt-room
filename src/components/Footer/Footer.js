import './Footer.css';


const Footer = () => {
    return (
        <footer>
            <div>
                <ul className='footer-list-contacts'>
                    <li>
                        Начало
            </li>
                    <li>
                        За нас
            </li>
                    <li>
                        Солни стаи
            </li>
                    <li>
                        Масажи
            </li>
                    <li>
                        Контакти
            </li>
                </ul>
            </div>
            <div className='footer-list-div'>
<h5>Сподели с приятели</h5>
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