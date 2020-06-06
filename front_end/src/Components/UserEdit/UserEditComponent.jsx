import React from "react"
import axiosInstance from "../../Axios/Axios"
import { USER_EDIT_API_ENDPOINT } from "../../Utils/utils"
import { USER_DATA_API_ENDPOINT } from "../../Utils/utils"
import { Typography, TextField, Button, Container, withStyles, Avatar, Snackbar } from "@material-ui/core"
import { editUserStyles } from "./EditUserStyles";
import { divStyle } from "./EditUserStyles";
import AppBarComponent from "../AppBar/AppBarComponent";
import { Redirect } from "react-router-dom";
import Logo from "../../Images/logo2.png";
import "./EditUserCSS.css";
import Background from "../../Images/background1.png";
import MuiAlert from '@material-ui/lab/Alert';


let userId = localStorage.getItem("authToken");
let Lastname = "";
let Firstname = "";
let Email = "";
let Telephone = "";
let Address = "";

class UserEditComponent extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            user: [{
                "firstname": "default",
                "lastname": "default",
                "email": "default",
                "telephone": "default",
                "address": "default"
            }],
            snackbar:{
                open:false,
                message:"Default message"
            },
            redirect: false
        }
    }

    componentDidMount = () => {
        this.displayUserData();
    }

    /**POST */ // Send the updated data 
    updateUser = () => {
        axiosInstance.put(USER_EDIT_API_ENDPOINT + '/' + userId, { "Lastname": this.state.user.lastname, "Firstname": this.state.user.firstname, "Email": this.state.user.email, "Telephone": this.state.user.telephone, "Address": this.state.user.address }).then(() => {
        })
        this.setState({
            snackbar: {
                open: true,
                message: "Modified successfully."
            }
        })
     

    }


    displayUserData = () => {
        axiosInstance.get(USER_DATA_API_ENDPOINT + '/' + userId).then(response => {
            this.setState({
                user: response.data
            })
            Lastname = response.data.lastname;
            Firstname = response.data.firstname;
            Email = response.data.email;
            Telephone = response.data.telephone;
            Address = response.data.address;
        });
    }

    setLastname = (event) => {
        Lastname = event.target.value;
        this.setState({
            user: {
                firstname: Firstname,
                lastname: event.target.value,
                email: Email,
                telephone: Telephone,
                address: Address,
            }
        });
    }

    setFirstname = (event) => {

        Firstname = event.target.value;
        this.setState({
            user: {
                firstname: event.target.value,
                lastname: Lastname,
                email: Email,
                telephone: Telephone,
                address: Address,
            }
        });
    }

    setEmail = (event) => {
        Email = event.target.value;
        this.setState({
            user: {
                firstname: Firstname,
                lastname: Lastname,
                email: event.target.value,
                telephone: Telephone,
                address: Address,
            }
        });
    }

    setTelephone = (event) => {
        Telephone = event.target.value;
        this.setState({
            user: {
                firstname: Firstname,
                lastname: Lastname,
                email: Email,
                telephone: event.target.value,
                address: Address,
            }
        });
    }

    setAddress = (event) => {
        Address = event.target.value;
        this.setState({
            user: {
                firstname: Firstname,
                lastname: Lastname,
                email: Email,
                telephone: Telephone,
                address: event.target.value,
            }
        });
    }
    isTokenExpired = token => {
        if (token === null) return false;
        return true;
    };

    handleClose = () =>{
        this.setState({
            snackbar: {
                open: false,
                message: ""
            }
        })
        window.location.href = "/dashboard"
    }


    render() {
        if (this.isTokenExpired(localStorage.getItem("authToken")) === false) {
            return <Redirect to="/login" />;
        }
        const { classes } = this.props;
        if (this.state.redirect) {
            return <Redirect to={this.state.redirect} />
        }
        return (
            <div className="main3">
                <img src={Background} id="bg" alt=""></img>
                <AppBarComponent></AppBarComponent>
                <React.Fragment>
                    <Container component="main" maxWidth="xs">
                        <div className={classes.paper} style={divStyle}>

                            <Avatar
                                alt="Remy Sharp"
                                src={Logo}
                                className={classes.large}
                            />

                            <Typography component="h5" variant="h5">
                                Update your information
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
                                    value={this.state.user.firstname}
                                    defaultValue="default"
                                    onChange={this.setFirstname}
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
                                    value={this.state.user.lastname}
                                    defaultValue="default"
                                    onChange={this.setLastname}
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
                                    value={this.state.user.email}
                                    defaultValue="default"
                                    onChange={this.setEmail}
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
                                    value={this.state.user.telephone}
                                    defaultValue="0"
                                    onChange={this.setTelephone}
                                />

                                <TextField
                                    variant="outlined"
                                    margin="normal"
                                    required
                                    fullWidth
                                    id="adress"
                                    label="City"
                                    name="adress"
                                    autoComplete="address"
                                    value={this.state.user.address}
                                    defaultValue="default"
                                    onChange={this.setAddress}
                                />

                                <Button
                                    fullWidth
                                    variant="contained"
                                    color="primary"
                                    className={classes.submit}
                                    onClick={this.updateUser}
                                >
                                    Save
                            </Button>


                            </div>
                        </div>
                        <br></br>
                    </Container>
                    <Snackbar open={this.state.snackbar.open} autoHideDuration={1750} onClose={this.handleClose}>
                        <MuiAlert elevation={6} variant="filled" onClose={this.handleClose} severity="success">
                            {this.state.snackbar.message}
                        </MuiAlert>
                    </Snackbar>
                </React.Fragment>
            </div>
        )
    }
}

export default withStyles(editUserStyles)(UserEditComponent)