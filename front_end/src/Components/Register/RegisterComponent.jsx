import React from "react"
import axiosInstance from "../../Axios/Axios"
import { REGISTER_API_ENDPOINT } from "../../Utils/utils"
import { Typography, TextField, Button, Container, withStyles, Avatar, FormControl, InputLabel, Select, MenuItem, Snackbar } from "@material-ui/core"
import { registerStyles } from "./RegisterStyles";
import base64 from 'react-native-base64'
import { divStyle } from "./RegisterStyles";
import "./RegisterCSS.css";
import Logo from "../../Images/logo2.png";
import Background from "../../Images/background1.png";
import MuiAlert from '@material-ui/lab/Alert';


let lastname = "";
let firstname = "";
let email = "";
let telephone = "";
let address = "";
let type = "";
let password = "";
let passwordcheck = "";
let myArray = [];

class RegisterComponent extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            redirect: null,
            snackbar: {
                open: false,
                message: "message"
            }
        }

    }

    createUser = () => {

        let regex = new RegExp("[0-9]+");
        if (regex.test(lastname) || regex.test(firstname)) {
            this.setState({
                snackbar: {
                    open: true,
                    message: "Name fields must not contain numbers"
                }
            })
            return;
        }


        if (password.length < 5) {
            this.setState({
                snackbar: {
                    open: true,
                    message: "Password must be at least 5 characters"
                }
            })
            return;
        }

        let regexemail = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
        if (!email.match(regexemail)) {
            this.setState({
                snackbar: {
                    open: true,
                    message: "Email format not correct"
                }
            })
            return;
        }
        
        if(telephone.length !== 10){
            this.setState({
                snackbar: {
                    open: true,
                    message: "Telephone number length not correct"
                }
            })
            return;
        }


        if ((lastname !== "") && (firstname !== "") && (email !== "") && (telephone !== "") && (address !== "") && (password !== "")) {
            if (password === passwordcheck) {

                axiosInstance.post(REGISTER_API_ENDPOINT + "/Register", {
                    "LastName": lastname, "FirstName": firstname, "Email": email, "Telephone": telephone,
                    "Address": address, "Type": type, "Password": btoa(password), "ObjectId": myArray
                }).then(response => {
                    console.log("am ajuns aici");
                    console.log(response.data);
                    this.setState({
                        user: JSON.parse(base64.decode(response.data))
                    })
                
                    localStorage.setItem("authToken", this.state.user.Id);
                    localStorage.setItem("userType", this.state.user.Type);

                    window.location.href = "/dashboard"

                })
                    .catch(() => {
                        this.setState({
                            snackbar: {
                                open: true,
                                message: "User already exists"
                            }
                        })
                    });
            } else {
                this.setState({
                    snackbar: {
                        open: true,
                        message: "Passwords do not match"
                    }
                })
            }
        } else {
            this.setState({
                snackbar: {
                    open: true,
                    message: "Cannot have empty fields"
                }
            })
        }
    }

    getLastName = (event) => {
        lastname = event.target.value;
    }

    getFirstName = (event) => {
        firstname = event.target.value;
    }

    getEmail = (event) => {
        email = event.target.value;
    }

    getTelephone = (event) => {
        telephone = event.target.value;
    }

    getAddress = (event) => {
        address = event.target.value;
    }

    getPassword = (event) => {
        password = event.target.value;
    }

    getPasswordCheck = (event) => {
        passwordcheck = event.target.value;
    }

    getOption = (event) => {
        type = event.target.value
    }

    handleClose = () => {
        this.setState({
            snackbar: {
                open: false
            }
        })
    }

    render() {
        const { classes } = this.props;

        return (
            <div className="main2">
                <img src={Background} id="bg" alt=""></img>
                <Container component="main" maxWidth="xs">
                    <br></br>
                    <div className={classes.paper} style={divStyle}>

                        <Avatar
                            alt="Remy Sharp"
                            src={Logo}
                            className={classes.large}
                        />

                        <Typography component="h1" variant="h5">
                            Register
                    </Typography>
                        <div className={classes.form} noValidate>

                            <TextField
                                autoComplete="fname"
                                name="firstName"
                                margin="normal"
                                variant="outlined"
                                required
                                fullWidth
                                id="firstName"
                                label="First Name"
                                autoFocus
                                onChange={this.getFirstName}
                            />

                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                margin="normal"
                                id="lastName"
                                label="Last Name"
                                name="lastName"
                                autoComplete="lname"
                                onChange={this.getLastName}
                            />

                            <TextField
                                variant="outlined"
                                margin="normal"
                                required
                                fullWidth
                                id="email"
                                label="Email Address"
                                name="email"
                                autoComplete="email"
                                onChange={this.getEmail}
                            />

                            <TextField
                                variant="outlined"
                                margin="normal"
                                required
                                fullWidth
                                id="phone"
                                label="Phone"
                                name="phone"
                                type="number"
                                autoComplete="phone"
                                onChange={this.getTelephone}
                            />

                            <TextField
                                variant="outlined"
                                margin="normal"
                                required
                                fullWidth
                                id="adress"
                                label="Address"
                                name="adress"
                                autoComplete="address"
                                onChange={this.getAddress}
                            />

                            <FormControl margin="normal" fullWidth variant="outlined" className={classes.formControl}>
                                <InputLabel fullWidth id="demo-simple-select-outlined-label">Type</InputLabel>
                                <Select
                                    labelId="selecttype"
                                    id="selecttype"
                                    onChange={this.getOption}
                                    label="type"

                                >
                                    <MenuItem value={"nevoias"}>Person In Need</MenuItem>
                                    <MenuItem value={"volunteer"}>Volunteer</MenuItem>
                                </Select>
                            </FormControl>

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

                            <TextField
                                variant="outlined"
                                margin="normal"
                                required
                                fullWidth
                                name="passwordcheck"
                                label="Password Check"
                                type="password"
                                id="passwordcheck"
                                autoComplete="current-password"
                                onChange={this.getPasswordCheck}
                            />
                            <Button

                                fullWidth
                                variant="contained"
                                color="primary"
                                className={classes.submit}
                                onClick={this.createUser}
                            >
                                Register
                         </Button>
                            <Button
                                href="./login"
                                style={{
                                    fontSize: "12px",
                                    color: "#6291b0",
                                    borderColor: "#6291b0",
                                    textTransform: "initial",
                                }}
                                className={classes.submit2}
                                fullWidth
                                variant="outlined"
                            >
                                {" "}
                                Already a member? Sign In instead.
                            </Button>
                        </div>
                    </div>
                    <br></br>
                </Container>

                <Snackbar open={this.state.snackbar.open} autoHideDuration={3000} onClose={this.handleClose}>
                    <MuiAlert elevation={6} variant="filled" onClose={this.handleClose} severity="error">
                        {this.state.snackbar.message}
                    </MuiAlert>
                </Snackbar>
            </div>

        )
    }
}

export default withStyles(registerStyles)(RegisterComponent)