import React from "react"
import axiosInstance from "../../Axios/Axios"
import { REGISTER_API_ENDPOINT } from "../../Utils/utils"
import { Typography, TextField, Button, Container, withStyles, Avatar, FormControl, InputLabel, Select, MenuItem } from "@material-ui/core"
import { registerStyles } from "./RegisterStyles";

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



    createUser = () => {
        if ((lastname !== "") && (firstname !== "") && (email !== "") && (telephone !== "") && (address !== "") && (password !== "")) {
            if (password === passwordcheck) {
              
                axiosInstance.post(REGISTER_API_ENDPOINT, {
                    "LastName": lastname, "FirstName": firstname, "Email": email, "Telephone": telephone,
                    "Address": address, "Type": type, "Password": btoa(password), "ObjectId": myArray
                }).then(() => {
                    alert("User created successfully");
                })
                    .catch(() => {
                        alert("User already exists");
                    });
            } else {
                alert("Passwords dont match");
            }
        } else {
            alert("Cant have empty fields");
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

    render() {
        const { classes } = this.props;
        return (
            <Container component="main" maxWidth="xs">
                <div className={classes.paper}>

                    {//TODO add here volunteer logo
                    }
                    <Avatar className={classes.avatar}>
                        VN
                     </Avatar>

                    <Typography component="h5" variant="h5">
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
                                <MenuItem value={"nevoias"}>nevoias</MenuItem>
                                <MenuItem value={"volunteer"}>volunteer</MenuItem>
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

                    </div>
                </div>

            </Container>


        )
    }
}

export default withStyles(registerStyles)(RegisterComponent)