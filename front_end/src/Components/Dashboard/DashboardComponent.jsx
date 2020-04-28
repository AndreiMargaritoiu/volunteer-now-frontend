import React from "react"
import AppBarComponent from "../AppBar/AppBarComponent";
import DashboardContentComponent from "./DashboardContent/DashboardContentComponent";
import FABComponent from "./FABCreate/FABComponent";


class DashboardComponent extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
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