import React from "react"
import { appBarStyle } from "./AppBarStyles";
import { withStyles, Avatar } from "@material-ui/core";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Logo from "../../Images/logo8.png";

class AppBarComponent extends React.Component {



    update = () => {
        window.location.href = "/user/edit"   
    }

    logout = () => {
        localStorage.clear();
        window.location.href = "/login"
    }
    donate = () => {
        localStorage.clear();
        window.location.href = "/donations"
    }

    goHome = () => {
        window.location.href = "/dashboard"
    }

    render() {
        const { classes } = this.props;
       
        return (
            <AppBar style={{ background: '#84a8c0' }} position="static">
                <Toolbar>
                   
                    <Typography variant="h6" className={classes.title}>
                        <Avatar edge="start"  src ={Logo} className={classes.avatar1} onClick={this.goHome} style ={{cursor:'pointer'}}></Avatar>
                    </Typography>
                    <Button color="inherit"onClick={this.donate} className={classes.submit}>Donate</Button>
                    <Button color="inherit" onClick={this.update} className={classes.submit}>Update Profile</Button>
                    <Button color="inherit"onClick={this.logout} className={classes.submit}>Logout</Button>
                </Toolbar>
            </AppBar>

        )
    }

}


export default withStyles(appBarStyle)(AppBarComponent)