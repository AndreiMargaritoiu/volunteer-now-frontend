import React from "react";
import axiosInstance from "../../Axios/Axios";
import { LOGIN_API_ENDPOINT } from "../../Utils/utils";
import {
  Typography,
  TextField,
  Button,
  Grid,
  Link,
  Container,
  withStyles,
  Avatar,
} from "@material-ui/core";
import { loginStyles } from "./LoginStyles";
import { divStyle } from "./LoginStyles";
import { Redirect } from "react-router-dom";
import base64 from "react-native-base64";
import "./LoginCSS.css";
import Logo from "../../Images/logo2.png";
let email = "";
let password = "";

class LoginComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      redirect: null,
      checker: false,
    };
  }

  login = () => {
    if (email !== "" && password !== "") {
      axiosInstance
        .post(LOGIN_API_ENDPOINT, {
          Email: email,
          Password: btoa(password),
        })
        .then((response) => {
          this.setState({
            user: JSON.parse(base64.decode(response.data)),
          });
          if (this.state.user["Error"] === "user not found") {
            alert("User does not exist!");
            this.setChecker();
          } else if (this.state.user["Error"] === "wrong password")
            alert("Wrong password!");
          else {
            const user = this.state.user.Id + " " + this.state.user.Type;
            alert("User " + user + " logged in successfully");
            localStorage.setItem("authToken", this.state.user.Id);
            localStorage.setItem("userType", this.state.user.Type);
            this.setState({ redirect: "/dashboard" });
          }
        })
        .catch((error) => {
          alert(error);
        });
    }
  };

  setChecker = () => {
    this.setState({
      checker: true,
    })
      .then((response) => {
        if (response.data == "user not found") {
          alert("User does not exist!");
          this.setRedirect();
        } else if (response.data == "wrong password") alert("Wrong password!");
        else alert("User " + response.data + " logged in successfully");
      })
      .catch((error) => {
        alert(error);
      });
  };

  getEmail = (event) => {
    email = event.target.value;
  };

  getPassword = (event) => {
    password = event.target.value;
  };

  render() {
    const { classes } = this.props;
    if (this.state.redirect) {
      return <Redirect to={this.state.redirect} />;
    }
    return (
      <div className="main1">
        <Container component="main" maxWidth="xs">
          <br></br>
          <div className={classes.paper} style={divStyle}>
            {
              //TODO add here volunteer logo?
            }
            {/* <Avatar className={classes.avatar}>
                        VN
                    </Avatar>
                    <img src = "../../Images/logo.png"/> */}
            <Avatar
              alt="Remy Sharp"
              src={Logo}
              className={classes.large}
            />

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
                classes = {{label: classes.label}}
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
                className = {classes.input}
                color = "white"
                
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
              
              <Button
                fullWidth
                variant="outlined"
                color="primary"
                href="./register"
                className={classes.submit1}
                // onClick={this.login}
              >
                Don't have an account yet? Register instead.
              </Button>
              
              <Grid container>
                <Grid>
                  {this.state.checker ? (
                    <div>
                      <Link href="/register">
                        <Typography color="secondary">
                          Don't have an account yet?
                        </Typography>
                      </Link>
                    </div>
                  ) : null}
                </Grid>
              </Grid>
            </div>
          </div>
        </Container>
      </div>
    );
  }
}

export default withStyles(loginStyles)(LoginComponent);
