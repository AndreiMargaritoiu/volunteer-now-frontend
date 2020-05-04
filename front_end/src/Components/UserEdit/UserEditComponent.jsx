import React from "react"
import axiosInstance from "../../Axios/Axios"
import { USER_EDIT_API_ENDPOINT } from "../../Utils/utils"
import { USER_DATA_API_ENDPOINT } from "../../Utils/utils"
import { Typography, Divider, TextField, Button } from "@material-ui/core"

let userId = localStorage.getItem("authToken");;
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
                "firstname" : "default",
                "lastname" : "default",
                "email" : "default",
                "telephone" : "default",
                "address"  : "default"
            }]
        } 
        this.DisplayUserData();
    }
  
   componentDidMount =() => {
        this.displayUserData();
    }

     /**POST */ // Send the updated data 
    updateUser = () => {
      axiosInstance.put(USER_EDIT_API_ENDPOINT + '/' + userId, {"Lastname": this.state.user.lastname, "Firstname": this.state.user.firstname, "Email" : this.state.user.email, "Telephone" : this.state.user.telephone, "Address" : this.state.user.address}).then(() => {
        })
    }


    displayUserData = () => {
        axiosInstance.get(USER_DATA_API_ENDPOINT + '/' + userId).then(response => {
            this.setState({
                user: response.data
            })
          
        });
    }
  
    setLastname = (event) => {
        Lastname = event.target.value;
        this.setState({user : {
            firstname : Firstname,
            lastname : event.target.value,
            email : Email,
            telephone : Telephone,
            address  : Address,
        }});
    }

    setFirstname = (event) => {
      
        Firstname = event.target.value;
        this.setState({user : {
                firstname : event.target.value,
                lastname : Lastname,
                email : Email,
                telephone : Telephone,
                address  : Address,
            }});
        
    }

    setEmail = (event) => {
        Email = event.target.value;
        this.setState({user : {
            firstname : Firstname,
            lastname : Lastname,
            email : event.target.value,
            telephone : Telephone,
            address  : Address,
        }});
    }

    setTelephone = (event) => {
        Telephone = event.target.value;
        this.setState({user : {
            firstname : event.target.value,
            lastname : Lastname,
            email : Email,
            telephone : event.target.value,
            address  : Address,
        }});
    }

    setAddress = (event) => {
        Address = event.target.value;
        this.setState({user : {
            firstname : event.target.value,
            lastname : Lastname,
            email : Email,
            telephone : Telephone,
            address  : event.target.value,
        }});
    }

    render() {
            return (
                <React.Fragment>
    
                    <Typography variant="h4">Edit User</Typography>

                    <Divider></Divider>               
                    <br></br><br></br>

                    <Divider></Divider>
                               
                    <TextField id="outlined-basic" label="Firstname" variant="outlined" value={this.state.user.firstname} onChange={this.setFirstname} />
                    <TextField id="outlined-basic" label="Lastname" variant="outlined" value={this.state.user.lastname} onChange={this.setLastname} />
                    <TextField id="outlined-basic" label="Email" variant="outlined" value={this.state.user.email} onChange={this.setEmail} />
                    <TextField id="outlined-basic" label="Telephone" variant="outlined" value={this.state.user.telephone} onChange={this.setTelephone} />
                    <TextField id="outlined-basic" label="Adress" variant="outlined" value={this.state.user.address} onChange={this.setAddress} />
                   
                    <Button onClick={this.UpdateUser}>Submit changes</Button>    
                </React.Fragment>
            )
        }
}

export default UserEditComponent

