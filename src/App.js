
import { Route, Switch, Redirect } from 'react-router-dom';

import './App.css';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';
import ContactUs from './components/ContactUs/ContactUs';
import SaltRooms from './components/SaltRooms/SaltRooms';
import Feedback from './components/Feedback/Feedback';
import { auth } from './utils/firebase';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import BookSaltRoom from './components/BookSaltRoom/BookSaltRoom';
import BookingCalendar from './components/BookingCalendar/BookingCalendar';
import { useEffect, useState } from "react";
import Appointment from './components/Appointment/Appointment';
import AddedCommentNotification from './components/AddedCommentNotification/AddedCommentNotification';
import Characteristics from './components/Characteristics/Characteristics';
import AppointmentNotification from './components/AppointmentNotification/AppointmentNotification';

function App() {

  const [user, setUser] = useState(null);

  useEffect(() => {
    auth.onAuthStateChanged(setUser)
  }, []);


  const authInfo = {
    isAuthenticated: Boolean(user),
    username: user?.email,
  };

  return (
    <div className="container">
      <Header {...authInfo} />
      <Main />
      <Switch>
        

        <Route path="/contact-us" render={props => <ContactUs {...props} {...authInfo} />} />
        <Route path="/salt-rooms" exact render={props => <SaltRooms {...props} {...authInfo} />} />
        <Route path="/book-room" render={props => <BookSaltRoom {...props} {...authInfo}/>} />
        <Route path="/salt-rooms/book-room/booking-calendar" render={props => <BookingCalendar {...props} {...authInfo} />} />
        <Route path="/book-room">
          {!user ? <Redirect to="/salt-rooms/book-room/booking-calendar" /> : <BookingCalendar />}
        </Route>
        <Route path="/booking-calendar/appointment" render={props => <Appointment {...props} {...authInfo}/>} />

        <Route path="/booking-calendar/appointment" render={props => <Appointment {...props} {...authInfo} />} />
* <Route path="/appointment-notification" component={AppointmentNotification}/> *
* <Route path="/salt-rooms/book-room/booking-calendar">
         {!user ? <Redirect to="/booking-calendar/appointment" /> : <Appointment />}
       </Route> 
        <Route path="/feedback" render={props => <Feedback {...props} {...authInfo} />} />
        <Route path="/header" render={props => <Header {...props} {...authInfo} />} />
        <Route path="/notification" render ={props => <AddedCommentNotification {...props} {...authInfo} />} />
        <Route path='/characteristics' render={props => <Characteristics {...props} {...authInfo}/>} />
        <Route path='/login' render={props => <Login {...props} {...authInfo} />} />
        <Route path="/register" render={props => <Register {...props} {...authInfo} />} />
        <Route path="/logout" render={props => {
          auth.signOut();
          return <Redirect to="/" />
        }} />

      </Switch>
      <Footer />
    </div>
  );
}

export default App;


