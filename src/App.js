import { Route, Switch, Redirect } from 'react-router-dom';

import './App.css';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import MoreInfo from './components/MoreInfo/MoreInfo';
import Footer from './components/Footer/Footer';
import ContactUs from './components/ContactUs/ContactUs';
import SaltRooms from './components/SaltRooms/SaltRooms';
import Feedback from './components/Feedback/Feedback';
import Massages from './components/Massages/Massages';
import { auth } from './utils/firebase';
import Login from './components/Login/Login';
import Register from './components/Register/Register';

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
        {/* <Route path="/" exact component={} /> */}

        <Route path="/contact-us" component={ContactUs} />
        <Route path="/salt-rooms" component={SaltRooms} />

        <Route path="/feedback" component={Feedback} />
        <Route path="/header" component={Header} />
        <Route path="/massages" component={Massages} />
        <Route path="/moreInfo" component={MoreInfo} />

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
