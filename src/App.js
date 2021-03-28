import { Route, Switch } from "react-router-dom";

import './App.css';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import MoreInfo from './components/MoreInfo/MoreInfo';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="container">
      <Header />
      <Main />
      <Switch>
        <Route path="/more-info" component={MoreInfo} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
