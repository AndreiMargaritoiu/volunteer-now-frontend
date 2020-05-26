import React from "react"
import AppBarComponent from "../AppBar/AppBarComponent";
import DashboardContentComponent from "./DashboardContent/DashboardContentComponent";
import FABComponent from "./FABCreate/FABComponent";
import { Redirect } from "react-router-dom";


class DashboardComponent extends React.Component {

   

    isTokenExpired = token => {
        if (token === null) return false;
        return true;
      };

    render() {
        if (this.isTokenExpired(localStorage.getItem("authToken")) === false) {
            return <Redirect to="/login" />;
        }
        return (
            <React.Fragment>
                <AppBarComponent></AppBarComponent>
                <DashboardContentComponent></DashboardContentComponent>
                <FABComponent></FABComponent>
            </React.Fragment>
        )
    }

}

export default DashboardComponent;