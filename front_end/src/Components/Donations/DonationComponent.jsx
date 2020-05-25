import React from "react"
import axiosInstance from "../../Axios/Axios"
import { DONATIONS_API_ENDPOINT } from "../../Utils/utils"
import Logo from "../../Images/logo2.png";
import { Typography, TextField, Button, Container, withStyles, Avatar, FormControl, InputLabel, Select, MenuItem, Divider } from "@material-ui/core"
import DonationCardDummy from "./DonationCard/DonationCardDummy"
import { donationStyles } from "./DonationStyles";
import { divStyle } from "./DonationStyles";
import "./DonationCSS.css";
import Background from "../../Images/background1.png";

let title = "";
let description = "";
let sum = 0;

class DonationComponent extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            donations: [{
                "title": "Quick donation"
                
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
        const {classes} = this.props;
        return (
            <div className="main5">
                <br></br>
                <img src={Background} id="bg" alt=""></img>
            <React.Fragment>
                
                
                <Container component="main" maxWidth="xs">
                <div className={classes.paper} style={divStyle}>
                <Avatar
                            alt="Remy Sharp"
                            src={Logo}
                            className={classes.large}
                />
                <Typography component="h5" variant="h5">
                    Donate
                </Typography>
                <br></br>
                <Typography component="h5" variant="h10">
                    Your involvement is valued and so is your time.
                    You can either make a quick donation by simply
                    selecting the desired amount or get into further 
                    details by mentioning the title of the organization 
                    you want to support and letting us know
                    about the purpose of your donation.
                </Typography>
                <div style={divStyle}>
                <DonationCardDummy classes = {classes} cards={this.state.donations} changeSum={this.changeSum}></DonationCardDummy>
                </div>
                <div className={classes.form} noValidate>
                <TextField id="outlined-basic" 
                            label="Title"
                            variant="outlined" 
                            margin = "normal"
                            required
                            fullWidth
                            onChange={this.getTitle} />
                <TextField id="outlined-basic" 
                            label="Purpose" 
                            variant="outlined"
                            margin = "normal"
                            required
                            fullWidth 
                            onChange={this.getDescription} />
                <TextField id="outlined-basic" 
                            label="Amount" 
                            variant="outlined"
                            margin = "normal"
                            required
                            fullWidth
                            onChange={this.getSum} />
                <Button
                    fullWidth
                    variant="contained"
                    color="primary" 
                    className = {classes.submit}
                    onClick={this.createCard}>
                Submit
                </Button>
                </div>
                </div>
                </Container>

            </React.Fragment>
            <br></br>
            </div>
        )
    }

}

export default withStyles(donationStyles)(DonationComponent)