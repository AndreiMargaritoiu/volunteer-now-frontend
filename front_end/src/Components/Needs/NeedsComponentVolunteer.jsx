import React from "react"
import axiosInstance from "../../Axios/Axios"
import { NEEDS_API_ENDPOINT } from "../../Utils/utils"
import { REGISTER_API_ENDPOINT } from "../../Utils/utils"
import { Typography, Divider } from "@material-ui/core"
import NeedsCard from "./NeedsCard"

class NeedsComponentVolunteer extends React.Component {

    constructor(props) {

        super(props)
        this.state = {
            show: false,
            assignatedNeeds: [{
                "title" : "default",
                "description" : "default"
            }],
            needs: [{
                "title" : "default",
                "description" : "default"             
            }]
        }
    }

    componentDidMount() {
        this.uid = localStorage.getItem("authToken");
        this.refreshCards()
    }

    refreshCards = () => {
        axiosInstance.get(NEEDS_API_ENDPOINT + "/get/unassigned/" + this.uid).then(response => {
            this.setState({
                needs: response.data
            })
        })
        axiosInstance.get(NEEDS_API_ENDPOINT + "/get/assigned/" + this.uid).then(response => {
            this.setState({
                assignatedNeeds: response.data
            })
        });
    }   

    assignCard = (cardid) => {

        axiosInstance.put(REGISTER_API_ENDPOINT + "/assign/" + this.uid + "/" + cardid).then(() => {
           this.refreshCards()
        });
    }

    render() {
        console.log(this.state.needs)
        return (
            <React.Fragment>
                <Typography variant="h4">Volunteer dashboard</Typography>
                <Divider></Divider>
                <Typography variant="h6">Assigned needs</Typography>
                <NeedsCard cards={this.state.assignatedNeeds}></NeedsCard>
                <Divider></Divider>
                <Typography variant="h6">Unassigned needs</Typography>
                <NeedsCard cards={this.state.needs} assignCard={this.assignCard}></NeedsCard>
            </React.Fragment>
        )
    }

}

export default NeedsComponentVolunteer