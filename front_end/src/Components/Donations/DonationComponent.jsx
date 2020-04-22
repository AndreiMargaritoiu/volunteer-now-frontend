import React from "react"
import axiosInstance from "../../Axios/Axios"
import { DONATIONS_API_ENDPOINT } from "../../Utils/utils"
import DonationCardDummy from "./DonationCard/DonationCardDummy"
import { Typography, Divider, TextField, Button } from "@material-ui/core"

let title = "";
let description = "";
let sum = 0;

class DonationComponent extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            donations: [{
                "title": "default"
            }]
        }
    }


    componentDidMount() {
        this.refreshCards()
    }

    /**PUT */
    changeSum = (card, sum) => {

        card.sum += sum;
        axiosInstance.put(DONATIONS_API_ENDPOINT + "/" + card.id, card).then(() => {
            this.refreshCards()
        });

    }

    /**DELETE */
    deleteCard = (cardid) => {
        axiosInstance.delete(DONATIONS_API_ENDPOINT + "/" + cardid).then(() => {
            this.refreshCards()
        });
    }

    /**POST */
    createCard = () => {
        axiosInstance.post(DONATIONS_API_ENDPOINT, { "Title": title, "Description": description, "Sum": parseInt(sum) }).then(() => {
            this.refreshCards()
        })
    }

    /**GET */
    refreshCards = () => {
        axiosInstance.get(DONATIONS_API_ENDPOINT).then(response => {
            this.setState({
                donations: response.data
            })
        });
    }

    /** HELPER FUNCTIONS */
    getTitle = (event) => {
        title = event.target.value;
    }

    getDescription = (event) => {
        description = event.target.value;
    }

    getSum = (event) => {
        sum = event.target.value;
    }


    render() {
        return (
            <React.Fragment>

                <Typography variant="h4">Get all donations</Typography>
                <Divider></Divider>
                <DonationCardDummy cards={this.state.donations} changeSum={this.changeSum} deleteCard={this.deleteCard}></DonationCardDummy>

                <br></br><br></br>

                <Typography variant="h4">Create donation</Typography>
                <Divider></Divider>
                <TextField id="outlined-basic" label="Title" variant="outlined" onChange={this.getTitle} />
                <TextField id="outlined-basic" label="Description" variant="outlined" onChange={this.getDescription} />
                <TextField id="outlined-basic" label="Sum" variant="outlined" onChange={this.getSum} />
                <Button onClick={this.createCard}>Create Donation</Button>


            </React.Fragment>
        )
    }

}

export default DonationComponent