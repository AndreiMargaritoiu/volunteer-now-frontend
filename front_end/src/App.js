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
import UserEditComponent from "./Components/UserEdit/UserEditComponent";

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
        <Route exact path = "/userEdit" component ={UserEditComponent}/>
      </Switch>
      {defaultRoute}
    </Router>

  );
  
}

export default App;
