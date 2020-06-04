import React from "react"
import { withStyles, Container, Paper } from "@material-ui/core";
import { dashboardContentStyles } from "./DashboardContentStyles";
import NeedsComponentVolunteer from "../../Needs/NeedsComponentVolunteer";
import NeedsComponentNevoias from "../../Needs/NeedsComponentNevoias";
import "./DashboardContent.css";
import Background from "../../../Images/background1.png";

class DashboardContentComponent extends React.Component {

    // constructor(props) {
    //     super(props);
    // }

    render() {
        const { classes } = this.props;
        return (
            
            
            <div id = "app" >
                <img src={Background} id="bg" alt=""></img>
                <br></br>
            <React.Fragment>
                {localStorage.getItem("userType") === "volunteer" ?
                    <React.Fragment>
                        <Container className={classes.marginContainer}>
                            <Paper className={classes.paper}>
                                <NeedsComponentVolunteer></NeedsComponentVolunteer>
                            </Paper>
                    </Container>
                    </React.Fragment>
                :
                    <React.Fragment>
                        <Container className={classes.marginContainer}>
                            <Paper className={classes.paper}>
                                <NeedsComponentNevoias></NeedsComponentNevoias>
                            </Paper>
                    </Container>
                </React.Fragment>
                }
            </React.Fragment>
            <br></br>
            </div>
            

        );
    }

}

export default withStyles(dashboardContentStyles)(DashboardContentComponent);