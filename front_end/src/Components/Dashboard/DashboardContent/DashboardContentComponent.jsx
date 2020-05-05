import React from "react"
import { withStyles, Container, Typography, Paper } from "@material-ui/core";
import { dashboardContentStyles } from "./DashboardContentStyles";
import DonationComponent from "../../Donations/DonationComponent";
import NeedsComponent from "../../Needs/NeedsComponent";

class DashboardContentComponent extends React.Component {



    constructor(props) {
        super(props);

    }

    render() {
        const { classes } = this.props;
        return (
            <React.Fragment>
                <React.Fragment>
                    <Container className={classes.marginContainer}>
                        <Paper className={classes.paper}>
                            <NeedsComponent></NeedsComponent>
                        </Paper>
                    </Container>
                </React.Fragment>

            </React.Fragment>
        );
    }

}

export default withStyles(dashboardContentStyles)(DashboardContentComponent);