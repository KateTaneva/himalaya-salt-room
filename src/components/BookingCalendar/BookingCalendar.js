import './BookingCalendar.css';
import { Link } from 'react-router-dom';

const BookingCalendar = () => {
    return (
        <div className="booking-calendar-form">
            <div className="month">
                <ul>
                    <li className="prev"><i class="fas fa-chevron-left"></i></li>
                    <li className="next"><i class="fas fa-chevron-right"></i></li>
                    <li>April<br /><span >2021</span></li>
                </ul>
            </div>

            <ul className="weekdays">
                <li>Mo</li>
                <li>Tu</li>
                <li>We</li>
                <li>Th</li>
                <li>Fr</li>
                <li>Sa</li>
                <li>Su</li>
            </ul>

            <ul className="days">
                <li><Link to='#'></Link></li>
                <li><Link to='#'></Link></li>
                <li><Link to='#'></Link></li>
                <li><Link to="/booking-calendar/appointment">1</Link></li>
                <li><Link to="/booking-calendar/appointment">2</Link></li>
                <li><Link to="/booking-calendar/appointment">3</Link></li>
                <li><Link to="/booking-calendar/appointment">4</Link></li>
                <li><Link to="/booking-calendar/appointment">5</Link></li>
                <li><Link to="/booking-calendar/appointment">6</Link></li>
                <li><Link to="/booking-calendar/appointment">7</Link></li>
                <li><Link to="/booking-calendar/appointment">8</Link></li>
                <li><Link to="/booking-calendar/appointment">9</Link></li>
                <li><span className="active"><Link to="/booking-calendar/appointment">10</Link></span></li>
                <li><Link to="/booking-calendar/appointment">11</Link></li>
                <li><Link to="/booking-calendar/appointment">12</Link></li>
                <li><Link to="/booking-calendar/appointment">13</Link></li>
                <li><Link to="/booking-calendar/appointment">14</Link></li>
                <li><Link to="/booking-calendar/appointment">15</Link></li>
                <li><Link to="/booking-calendar/appointment">16</Link></li>
                <li><Link to="/booking-calendar/appointment">17</Link></li>
                <li><Link to="/booking-calendar/appointment">18</Link></li>
                <li><Link to="/booking-calendar/appointment">19</Link></li>
                <li><Link to="/booking-calendar/appointment">20</Link></li>
                <li><Link to="/booking-calendar/appointment">21</Link></li>
                <li><Link to="/booking-calendar/appointment">22</Link></li>
                <li><Link to="/booking-calendar/appointment">23</Link></li>
                <li><Link to="/booking-calendar/appointment">24</Link></li>
                <li><Link to="/booking-calendar/appointment">25</Link></li>
                <li><Link to="/booking-calendar/appointment">26</Link></li>
                <li><Link to="/booking-calendar/appointment">27</Link></li>
                <li><Link to="/booking-calendar/appointment">28</Link></li>
                <li><Link to="/booking-calendar/appointment">29</Link></li>
                <li><Link to="/booking-calendar/appointment">30</Link></li>
                <li><Link to="/booking-calendar/appointment"></Link></li>
                <li><Link to="/booking-calendar/appointment"></Link></li>

            </ul>

        </div>
    )
}

export default BookingCalendar;