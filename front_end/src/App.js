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
import LoginComponent from "./Components/Login/LoginComponent";
import RegisterComponent from "./Components/Register/RegisterComponent";

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
        <Route exact path = "/login" component ={LoginComponent}/>
        <Route exact path = "/register" component ={RegisterComponent}/>
      </Switch>
      {defaultRoute}
    </Router>

  );
  
}

export default App;