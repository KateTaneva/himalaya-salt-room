
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
import BookSaltRoom from './components/BookSaltRoom/BookSaltRoom';
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
        <Route path="/book-room" component={BookSaltRoom} />
        {/* <Route path="calendar" component={Calendar} /> */}
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

// import { Route, Switch, Redirect } from 'react-router-dom';

// import './App.css';
// import Header from './components/Header/Header';
// import Main from './components/Main/Main';
// import MoreInfo from './components/MoreInfo/MoreInfo';
// import Footer from './components/Footer/Footer';
// import ContactUs from './components/ContactUs/ContactUs';
// import SaltRooms from './components/SaltRooms/SaltRooms';
// import Feedback from './components/Feedback/Feedback';
// import Massages from './components/Massages/Massages';
// import { auth } from './utils/firebase';
// import Login from './components/Login/Login';
// import Register from './components/Register/Register';

// import { useEffect, useState } from "react";



// function App() {

//   const [user, setUser] = useState(null);

//   useEffect(() => {
//     auth.onAuthStateChanged(setUser)
//   }, []);


//   const authInfo = {
//     isAuthenticated: Boolean(user),
//     username: user.email,
//   };

//   return (
//     <div className="container">
//       <Header {...authInfo} />
//       <Main />
//       <Switch>
//         {/* <Route path="/" exact component={} /> */}

//         <Route path="/contact-us" render={ props => <ContactUs {...props} {...authInfo}/>} />
//         <Route path="/salt-rooms" render={ props => <SaltRooms {...props} {...authInfo}/>} />

//         <Route path="/feedback" render={props => <Feedback {...props} {...authInfo}/>} />
//         <Route path="/header" render={props => <Header {...props} {...authInfo}/>} />
//         <Route path="/massages" render={props => <Massages {...props} {...authInfo}/>} />
//         <Route path="/moreInfo" render={props =><MoreInfo {...props} {...authInfo}/>} />

//         <Route path='/login' render={props => <Login {...props} {...authInfo}/>} />
//         <Route path="/register" render={props => <Register {...props} {...authInfo}/>} />
//         <Route path="/logout" render={props => {
//           auth.signOut();
//           return <Redirect to="/" />
//         }} />

//       </Switch>
//       <Footer />
//     </div>
//   );
// }

// export default App;