import React from "react"
import { withStyles, Container, Typography, Paper } from "@material-ui/core";
import { dashboardContentStyles } from "./DashboardContentStyles";
import NeedsComponentVolunteer from "../../Needs/NeedsComponentVolunteer";
import NeedsComponentNevoias from "../../Needs/NeedsComponentNevoias";

class DashboardContentComponent extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        const { classes } = this.props;
        return (
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
        );
    }

}

export default withStyles(dashboardContentStyles)(DashboardContentComponent);