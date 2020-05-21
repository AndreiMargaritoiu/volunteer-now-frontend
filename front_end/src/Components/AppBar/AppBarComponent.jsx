import React from "react"
import { appBarStyle } from "./AppBarStyles";
import { withStyles, Avatar } from "@material-ui/core";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { Redirect } from "react-router-dom";


class AppBarComponent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            redirect: null
        }
    }

    update = () => {
        this.setState({ 
            redirect: "/user/edit",
            updatebtn: true
        });     
    }

    logout = () => {
        localStorage.clear();
        this.setState({ redirect: "/login" });
    }

    goHome = () => {
        this.setState({ redirect: "/dashboard" });
    }

    render() {
        const { classes } = this.props;
        if (this.state.redirect) {
            return <Redirect to={this.state.redirect} />
        }
        return (
            <AppBar position="static">
                <Toolbar>
                    <Avatar edge="start" className={classes.avatar} onClick={this.goHome}>VN</Avatar>
                    <Typography variant="h6" className={classes.title}></Typography>
                    <Button color="inherit" onClick={this.update} className={classes.submit}>Update Profile</Button>
                    <Button color="inherit"onClick={this.logout} className={classes.submit}>Logout</Button>
                </Toolbar>
            </AppBar>

        )
    }

}


export default withStyles(appBarStyle)(AppBarComponent)