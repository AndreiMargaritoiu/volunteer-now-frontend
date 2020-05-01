import React from "react"
import { appBarStyle } from "./AppBarStyles";
import { withStyles, Avatar } from "@material-ui/core";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';



class AppBarComponent extends React.Component {

    constructor(props) {
        super(props);
    }


    render() {
        const { classes } = this.props;
        return (
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" className={classes.title}>
                        Your dashboard
                    </Typography>

                    <Button color="inherit">USER ACTION1</Button>
                    <Button color="inherit">USER ACTION2</Button>
                    <Avatar edge="start" className={classes.avatar}>VN</Avatar>


                </Toolbar>
            </AppBar>

        )
    }

}


export default withStyles(appBarStyle)(AppBarComponent)