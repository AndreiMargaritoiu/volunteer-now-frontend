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



    /**GET */
    login = () => {
        axiosInstance.get(LOGIN_API_ENDPOINT).then(response => {
           
            response.data.forEach(user => {
                if(user.email == email && user.password == password)
                    {
                        alert("Cialut "+ user.name);

                    }
                else 
                {
                    alert("pleak!");
                }
            });


    });
}


    /** HELPER FUNCTIONS */
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


            </React.Fragment>
        )
    }

}

export default LoginComponent