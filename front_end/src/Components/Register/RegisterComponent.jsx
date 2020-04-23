import React from "react"
import axiosInstance from "../../Axios/Axios"
import { REGISTER_API_ENDPOINT } from "../../Utils/utils"
import { Typography, Divider, TextField, Button } from "@material-ui/core"

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
            users: [{
                "lastname": "default",
                "firstname": "default",
                "email": "default",
                "telephone": "default",
                "address": "default",
                "type": "default",
                "password": "default"
            }]
        }
    }

    createUser = () => {
        if ((lastname !== "") && (firstname !== "") && (email !== "") && (telephone !== "")
            && (address !== "") && (type !== "") && (password !== "")){
                if (password == passwordcheck) {
                    axiosInstance.post(REGISTER_API_ENDPOINT, {
                        "LastName" : lastname, "FirstName" : firstname, "Email" : email,
                        "Telephone" : telephone, "Address" : address, "Type" : type, 
                        "Password" : password, "ObjectId" : myArray
                     })
                } else {

                }
            } else {
                
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

    getType = (event) => {
        type = event.target.value;
    }

    getPassword = (event) => {
        password = event.target.value;
    }

    getPasswordCheck = (event) => {
        passwordcheck = event.target.value;
    }

    render() {
        return (
            <React.Fragment>

                <Typography variant="h4">Register</Typography>
                <Divider></Divider>
                <TextField id="outlined-basic" label="LastName" variant="outlined" onChange={this.getLastName}/>
                <br></br>
                <TextField id="outlined-basic" label="FirstName" variant="outlined" onChange={this.getFirstName}/>
                <br></br>
                <TextField id="outlined-basic" label="Email" variant="outlined" onChange={this.getEmail}/>
                <br></br>
                <TextField id="outlined-basic" label="Telephone" variant="outlined" onChange={this.getTelephone}/>
                <br></br>
                <TextField id="outlined-basic" label="Address" variant="outlined" onChange={this.getAddress}/>
                <br></br>
                <TextField id="outlined-basic" label="Type" variant="outlined" onChange={this.getType}/>
                <br></br>
                <TextField type="password" id="outlined-basic" label="Password" variant="outlined" onChange={this.getPassword}/>
                <br></br>
                <TextField type="password" id="outlined-basic" label="Match Password" variant="outlined" onChange={this.getPasswordCheck}/>
                <br></br>
                <Button onClick={this.createUser}>Register</Button>

            </React.Fragment>
        )
    }
}

export default RegisterComponent