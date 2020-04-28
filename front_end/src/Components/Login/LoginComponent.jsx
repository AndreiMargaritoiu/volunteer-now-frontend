import React from "react"
import axiosInstance from "../../Axios/Axios"
import { LOGIN_API_ENDPOINT } from "../../Utils/utils"
import { Typography, TextField, Button, Grid, Link, Container, withStyles, Avatar } from "@material-ui/core"
import { loginStyles } from "./LoginStyles";

let email = "";
let password = "";

class LoginComponent extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            redirect: false
        }
    }

    login = () => {
        if ((email !== "") && (password !== "")) {
            axiosInstance.post(LOGIN_API_ENDPOINT, {
                "Email": email, "Password": btoa(password)
            }).then(response => {

                if (response.data == "user not found") {
                    alert("User does not exist!");
                    this.setRedirect();
                }

                else if (response.data == "wrong password")
                    alert("Wrong password!");

                else alert("User " + response.data + " logged in successfully");

            }).catch((error) => {

                alert(error);

            });
        }
    }

    setRedirect = () => {
        this.setState({
            redirect: true
        })
    }

    getEmail = (event) => {
        email = event.target.value;
    }

    getPassword = (event) => {
        password = event.target.value;
    }

    render() {

        const { classes } = this.props;
        return (
            <Container component="main" maxWidth="xs">
                <div className={classes.paper}>

                    {//TODO add here volunteer logo? 
                    }
                    <Avatar className={classes.avatar}>
                        VN
                    </Avatar>

                    <Typography component="h1" variant="h5">
                        Sign in
                    </Typography>
                    <div className={classes.form} noValidate>
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            label="Email Address"
                            name="email"
                            autoComplete="email"
                            autoFocus
                            onChange={this.getEmail}
                        />
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            label="Password"
                            type="password"
                            id="password"
                            autoComplete="current-password"
                            onChange={this.getPassword}
                        />
                        <Button

                            fullWidth
                            variant="contained"
                            color="primary"
                            className={classes.submit}
                            onClick={this.login}
                        >
                            Sign In
                             </Button>
                        <Grid container>

                            <Grid>


                                {
                                    this.state.redirect ? (
                                        <div>
                                            <Link href="/register">
                                                <Typography color="secondary">Don't have an account yet?</Typography>
                                            </Link>
                                        </div>
                                    ) : null
                                }
                            </Grid>
                        </Grid>
                    </div>
                </div>
            </Container>
        )
    }

}

export default withStyles(loginStyles)(LoginComponent)