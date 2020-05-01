import React from "react"
import { withStyles, Container, Typography, Paper } from "@material-ui/core";
import { dashboardContentStyles } from "./DashboardContentStyles";
import DonationComponent from "../../Donations/DonationComponent";


class DashboardContentComponent extends React.Component {


    //TODO conditional rendering based on 2 layouts based on this.state.layout1, can be eveything not only boolean

    constructor(props) {
        super(props);
        this.state = {
            layout1: false
        }

    }

    render() {
        const { classes } = this.props;
        return (
            <React.Fragment>
                {this.state.layout1 ?

                    /*LAYOUT 1*/
                    <React.Fragment>
                        <Container className={classes.marginContainer}>
                            {/* EXAMPLE TO SHOW HOW YOU CAN RENDER A COMPONENT */}
                            <Paper className={classes.paper}>
                                <DonationComponent></DonationComponent>
                            </Paper>
                        </Container>
                    </React.Fragment>

                    :

                    /*LAYOUT 2*/
                    <React.Fragment>
                        <Container className={classes.marginContainer}>
                            <Paper  className={classes.paper} >
                                <Typography>
                                    CIALUT DIN PRIMUL LAYOUT
                            </Typography>
                            </Paper>
                        </Container>
                    </React.Fragment>

                }
            </React.Fragment>
        );
    }

}

export default withStyles(dashboardContentStyles)(DashboardContentComponent);