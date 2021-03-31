import { Route, Switch } from 'react-router-dom';

import './App.css';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import MoreInfo from './components/MoreInfo/MoreInfo';
import Footer from './components/Footer/Footer';
import AboutUs from './components/AboutUs/AboutUs';
import SaltRooms from './components/SaltRooms/SaltRooms';
import Feedback from './components/Feedback/Feedback';
import Massages from './components/Massages/Massages';

function App() {
  return (
    <div className="container">
      <Header />
      <Main />
      <Switch>

        <Route path="/AboutUs" component={AboutUs} />
        <Route path="/SaltRooms" component={SaltRooms} />

        <Route path="/Feedback" component={Feedback} />
        <Route path="/Header" component={Header} />
        <Route path="/Massages" component={Massages} />
        <Route path="/moreInfo" component={MoreInfo} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
