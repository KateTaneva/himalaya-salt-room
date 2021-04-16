


import { Route, Switch, Redirect } from 'react-router-dom';

import './App.css';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';
import ContactUs from './components/ContactUs/ContactUs';
import SaltRooms from './components/SaltRooms/SaltRooms';
import Feedback from './components/Feedback/Feedback';
import AddedCommentNotification from './components/AddedCommentNotification/AddedCommentNotification';
import BookSaltRoom from './components/BookSaltRoom/BookSaltRoom';
import { auth } from './utils/firebase';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import BookingCalendar from './components/BookingCalendar/BookingCalendar';
import Appointment from './components/Appointment/Appointment';
import Characteristics from './components/Characteristics/Characteristics';
import AppointmentNotification from './components/AppointmentNotification/AppointmentNotification';

import { useEffect, useState } from "react";



function App() {


  const [user, setUser] = useState(null);

  useEffect(() => {
    auth.onAuthStateChanged(setUser)
  }, []);

  return (
    <div className="container">
      <Header username={user?.email} isAuthenticated={Boolean(user)} />
      <Main />
      <Switch>

        <Route path="/contact-us" component={ContactUs} />
        <Route path="/salt-rooms" exact component={SaltRooms} />
        <Route path="/book-room" component={BookSaltRoom} />
        <Route path="/salt-rooms/book-room/booking-calendar" component={BookingCalendar} />
        <Route path="/salt-rooms/book-room/booking-calendar" component={BookingCalendar} />
        <Route path="/booking-calendar/appointment" component={Appointment} />
        <Route path="/appointment-notification" component={AppointmentNotification}/>

        <Route path='/characteristics' component={Characteristics} />
        <Route path="/feedback" component={Feedback} />
        <Route path="/notification" component={AddedCommentNotification} />
        <Route path="/header" component={Header} />
        <Route path='/login' component={Login} />
        <Route path="/register" component={Register} />
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