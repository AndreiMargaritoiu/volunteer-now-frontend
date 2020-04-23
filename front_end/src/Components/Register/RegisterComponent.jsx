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
    }

    createUser = () => {
        if ((lastname !== "") && (firstname !== "") && (email !== "") && (telephone !== "")
            && (address !== "") && (password !== "")){
                if (password === passwordcheck) {
                    var e = document.getElementById("myList");
                    type = e.options[e.selectedIndex].value;
                    axiosInstance.post(REGISTER_API_ENDPOINT, {
                        "LastName" : lastname, "FirstName" : firstname, "Email" : email,
                        "Telephone" : telephone, "Address" : address, "Type" : type, 
                        "Password" : btoa(password), "ObjectId" : myArray
                     })
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
                <TextField type="number" id="outlined-basic" label="Telephone" variant="outlined" onChange={this.getTelephone}/>
                <br></br>
                <TextField id="outlined-basic" label="Address" variant="outlined" onChange={this.getAddress}/>
                <br></br>
                <label>Select list: </label>
                    <select id = "myList">
                        <option value = "nevoias">nevoias</option>
                        <option value = "volunteer">volunteer</option>
                    </select>
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