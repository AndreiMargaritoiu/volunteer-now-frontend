import React from "react"
import axiosInstance from "../../Axios/Axios"
import { USER_EDIT_API_ENDPOINT } from "../../Utils/utils"
import { DONATIONS_API_ENDPOINT } from "../../Utils/utils"
import DonationCardDummy from "../Donations/DonationCard/DonationCardDummy"

import { Typography, Divider, TextField, Button } from "@material-ui/core"

let userId = "";
let Lastname = "";
let Firstname = "";
let Email = "";
let Telephone = "";
let Adress = "";
let Type = "";
let Password = "";

class UserEditComponent extends React.Component {
    constructor(props) {
                super(props)
                this.state = {
                    user: [{
                        "title": "default"
                    }]
                }
            }

                /**POST */
    UpdateUser = () => {
        axiosInstance.post(USER_EDIT_API_ENDPOINT, { "_id": userId, "Lastname": Lastname, "Firstname": Firstname, "Email" : Email, "Telephone" : Telephone, "Adress" : Adress, "Type" :Type }).then(() => {
           // this.DisplayUserData();
        })
    }

    /**GET */
    DisplayUserData = () => {
        axiosInstance.get(USER_EDIT_API_ENDPOINT).then(response => {
            this.setState({
                user: response.data
            })
        });
    }

    setLastname = (event) => {
        Lastname = event.target.value;
    }

    setFirstname = (event) => {
        Firstname = event.target.value;
    }

    setEmail = (event) => {
        Email = event.target.value;
    }

    setTelephone = (event) => {
        Telephone = event.target.value;
    }

    setAdress = (event) => {
        Adress = event.target.value;
    }

    setType = (event) => {
        Type = event.target.value;
    }

    render() {
            return (
                <React.Fragment>
    
                    <Typography variant="h4">Edit User</Typography>
                    <Divider></Divider>
                    {/* <DonationCardDummy cards={this.state.donations} changeSum={this.changeSum} deleteCard={this.deleteCard}></DonationCardDummy> */}
    
                    <br></br><br></br>
    
                
                    <Divider></Divider>
                    <TextField id="outlined-basic" label="Firstname" variant="outlined" onChange={this.setFirstname} />
                    <TextField id="outlined-basic" label="Lastname" variant="outlined" onChange={this.setLastname} />
                    <TextField id="outlined-basic" label="Email" variant="outlined" onChange={this.setEmail} />
                    <TextField id="outlined-basic" label="Telephone" variant="outlined" onChange={this.setTelephone} />
                    <TextField id="outlined-basic" label="Adress" variant="outlined" onChange={this.setAdress} />
                    <TextField id="outlined-basic" label="Type" variant="outlined" onChange={this.setType} />
                
                    <Button onClick={this.UpdateUser}>Submit changes</Button>
    
    
                </React.Fragment>
            )
        }
}
export default UserEditComponent


// let title = "";
// let description = "";
// let sum = 0;

// class DonationComponent extends React.Component {

//     constructor(props) {
//         super(props)
//         this.state = {
//             donations: [{
//                 "title": "default"
//             }]
//         }
//     }


//     componentDidMount() {
//         this.refreshCards()
//     }

//     /**PUT */
//     changeSum = (card, sum) => {

//         card.sum += sum;
//         axiosInstance.put(DONATIONS_API_ENDPOINT + "/" + card.id, card).then(() => {
//             this.refreshCards()
//         });

//     }

//     /**DELETE */
//     deleteCard = (cardid) => {
//         axiosInstance.delete(DONATIONS_API_ENDPOINT + "/" + cardid).then(() => {
//             this.refreshCards()
//         });
//     }

//     /**POST */
//     createCard = () => {
//         axiosInstance.post(DONATIONS_API_ENDPOINT, { "Title": title, "Description": description, "Sum": parseInt(sum) }).then(() => {
//             this.refreshCards()
//         })
//     }

//     /**GET */
//     refreshCards = () => {
//         axiosInstance.get(DONATIONS_API_ENDPOINT).then(response => {
//             this.setState({
//                 donations: response.data
//             })
//         });
//     }

//     /** HELPER FUNCTIONS */
//     getTitle = (event) => {
//         title = event.target.value;
//     }

//     getDescription = (event) => {
//         description = event.target.value;
//     }

//     getSum = (event) => {
//         sum = event.target.value;
//     }


//     render() {
//         return (
//             <React.Fragment>

//                 <Typography variant="h4">Get all donations</Typography>
//                 <Divider></Divider>
//                 <DonationCardDummy cards={this.state.donations} changeSum={this.changeSum} deleteCard={this.deleteCard}></DonationCardDummy>

//                 <br></br><br></br>

//                 <Typography variant="h4">Create donation</Typography>
//                 <Divider></Divider>
//                 <TextField id="outlined-basic" label="Title" variant="outlined" onChange={this.getTitle} />
//                 <TextField id="outlined-basic" label="Description" variant="outlined" onChange={this.getDescription} />
//                 <TextField id="outlined-basic" label="Sum" variant="outlined" onChange={this.getSum} />
//                 <Button onClick={this.createCard}>Create Donation</Button>


//             </React.Fragment>
//         )
//     }

// }

// export default DonationComponent



