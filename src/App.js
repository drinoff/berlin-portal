import { Route, Switch } from "react-router-dom";

import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Services from './components/Services/Services';
import Useful from './components/Useful/Useful';
import Events from './components/Events/Events';
import Contact from './components/Contact/Contact';



import './App.css';

function App() {

  return (

    <div className="App">
      <Header />
      <div className='container'>
        <div>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/services" exact component={Services} />
            <Route path="/useful" exact component={Useful} />
            <Route path="/events" exact component={Events} />
            <Route path="/contact" exact component={Contact} />
          </Switch>
        </div>
      </div>
    </div>

  );
}

export default App;
