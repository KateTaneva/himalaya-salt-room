import { Route, Switch } from 'react-router-dom';

import './App.css';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import MoreInfo from './components/MoreInfo/MoreInfo';
import Footer from './components/Footer/Footer';
import AboutUs from './components/AboutUs/AboutUs';
import SaltRooms from './components/SaltRooms/SaltRooms';
import Feedback from './components/Feedback/Feedback';

function App() {
  return (
    <div className="container">
      <Header />
      <Main />
      <Switch>
        <Route path="/Header" component={Header} />
        <Route path="/AboutUs" component={AboutUs} />
        <Route path="/SaltRooms" component={SaltRooms} />
        <Route path="/more-info" component={MoreInfo} />
        <Route path="/Feedback" component={Feedback} />

      </Switch>
      <Footer />
    </div>
  );
}

export default App;
