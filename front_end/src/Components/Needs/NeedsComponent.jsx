import React from "react"
import axiosInstance from "../../Axios/Axios"
import { NEEDS_API_ENDPOINT } from "../../Utils/utils"
import { Typography, Divider, TextField, Button } from "@material-ui/core"
import NeedsCardVolunteer from "./NeedsCardVolunteer"
import NeedsCardNevoias from "./NeedsCardNevoias"

let title = "";
let description = "";

class NeedsComponent extends React.Component {

    constructor(props) {

        super(props)
        this.state = {
            needs: [{
             
            }]
        }
    }

    componentDidMount() {
        this.page = (localStorage.getItem("userType") === "volunteer") ? true : false;
        this.uid = localStorage.getItem("authToken");
        this.refreshCards()
    }

    refreshCards = () => {
        {/**VOLUNTAR */}
        if (this.page) {
            axiosInstance.get(NEEDS_API_ENDPOINT).then(response => {
                this.setState({
                    needs: response.data
                })
            });
        } else {
         {/** NEVOIAS */}
            axiosInstance.get(NEEDS_API_ENDPOINT + "/" + this.uid).then(response => {
                this.setState({
                    needs: response.data
                })
            });
        }
    }   

    createCard = () => {
        axiosInstance.post(NEEDS_API_ENDPOINT, {
            "UserId": localStorage.getItem("authToken"), "Title": title, "Description": description
        }).then(() => {
            this.refreshCards()
        })
    }

    getTitle = (event) => {
        title = event.target.value;
    }

    getDescription = (event) => {
        description = event.target.value;
    }

    assignCard = () => {
        console.log("TODO");
    }


    updateCard = () => {
        console.log("TODO UPDATE");
    }

    deleteCard = () => {
        console.log("TODO DELETE");
    }

    saveCard = () => {
        console.log("TODO SAVE");
    }
    


    render() {
        if (this.page) {
            return (
                <React.Fragment>
                    <Typography variant="h4">Volunteer dashboard</Typography>
                    <Divider></Divider>
                    <NeedsCardVolunteer cards={this.state.needs} assignCard={this.assignCard}></NeedsCardVolunteer>
                </React.Fragment>
            )
        } else {
            return (
                <React.Fragment>
                    <Typography variant="h4">Nevoias dashboard</Typography>
                    <Divider></Divider>
                    <NeedsCardNevoias cards={this.state.needs} updateCard={this.updateCard} deleteCard={this.deleteCard} saveCard={this.saveCard}></NeedsCardNevoias>
                    <br />
         
                </React.Fragment>
            )
        }
    }

}

export default NeedsComponent