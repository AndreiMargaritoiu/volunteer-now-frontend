import React from "react"
import axiosInstance from "../../Axios/Axios"
import { LOGIN_API_ENDPOINT } from "../../Utils/utils"
import { Typography, Divider, TextField, Button } from "@material-ui/core"

let email = "";
let password = "";

class LoginComponent extends React.Component {

    constructor(props) {
        super(props) 
    }

    state = {
        redirect: false
      }

    login = () => {
        if((email !== "") && (password !== "")){
            axiosInstance.post(LOGIN_API_ENDPOINT, {"Email" : email, "Password" : btoa(password)
            }).then( response => {

                if(response.data == "user not found") 
                    {
                    alert("User does not exist!");
                    this.setRedirect();
                    }

                else if (response.data == "wrong password")
                    alert("Wrong password!");

                else alert("User " + response.data + " logged in successfully");
    
        }).catch ((error) => {
    
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
            return (
                <React.Fragment>
                    <Typography variant="h4">Login form</Typography>
                    <Divider></Divider>
                    <TextField id="outlined-basic" label="Email" variant="outlined" onChange={this.getEmail} />
                    <TextField id="outlined-basic" label="Password" variant="outlined" onChange={this.getPassword} />
                    <Button onClick={this.login}>Login</Button>
                    {
                        this.state.redirect ? (
                        <div>
                        <Button onClick={() => this.props.history.push('register')}>Redirect to Register page.</Button>
                        </div>
                    ) : null
                    }
                 </React.Fragment>
            )
        }
    
}

export default LoginComponent