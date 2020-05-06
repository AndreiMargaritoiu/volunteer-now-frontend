import React from "react"
import axiosInstance from "../../Axios/Axios"
import { NEEDS_API_ENDPOINT } from "../../Utils/utils"
import { Typography, Divider } from "@material-ui/core"
import NeedsCard from "./NeedsCard"

class NeedsComponentVolunteer extends React.Component {

    constructor(props) {

        super(props)
        this.state = {
            show: false,
            needs: [{
             
            }],
            need: [{
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
        axiosInstance.get(NEEDS_API_ENDPOINT).then(response => {
            this.setState({
                needs: response.data
            })
        });
    }   

    assignCard = () => {
        console.log("TODO");
    }

    render() {
        return (
            <React.Fragment>
                <Typography variant="h4">Volunteer dashboard</Typography>
                <Divider></Divider>
                <NeedsCard cards={this.state.needs} assignCard={this.assignCard}></NeedsCard>
            </React.Fragment>
        )
    }

}

export default NeedsComponentVolunteer