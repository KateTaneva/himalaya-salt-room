import { Route, Switch } from 'react-router-dom';

import './App.css';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import MoreInfo from './components/MoreInfo/MoreInfo';
import Footer from './components/Footer/Footer';
import AboutUs from './components/AboutUs/AboutUs';
import SaltRooms from './components/SaltRooms/SaltRooms';

function App() {
  return (
    <div className="container">
      <Header />
      <Main />
      <Switch>
        <Route path="/" component={Header} />
        <Route path="/" component={AboutUs} />
        <Route path="/" component={SaltRooms} />
        <Route path="/more-info" component={MoreInfo} />

      </Switch>
      <Footer />
    </div>
  );
}

export default App;
