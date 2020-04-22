import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";
import MainComponent from './Components/MainComponent';
import DonationComponent from "./Components/Donations/DonationComponent";

function App() {

  /*REDIRECTING TO DEFAULT - TO BE DECIDED*/
  const defaultRoute =
    window.location.pathname === "/" ? <Redirect to="/" /> : undefined;
    
  return (

    /*ADD COMPONENTS WITH PATH*/
    <Router>
      <Switch>
        <Route exact path = "/" component={MainComponent} />
        <Route exact path = "/donations" component ={DonationComponent}/>
      </Switch>
      {defaultRoute}
    </Router>

  );
  
}

export default App;
