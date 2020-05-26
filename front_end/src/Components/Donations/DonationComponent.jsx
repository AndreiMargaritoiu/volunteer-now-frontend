import React from "react"
import axiosInstance from "../../Axios/Axios"
import { DONATIONS_API_ENDPOINT } from "../../Utils/utils"
import Logo from "../../Images/logo2.png";
import { Typography, TextField, Button, Container, withStyles, Avatar, Snackbar } from "@material-ui/core"
import DonationCardDummy from "./DonationCard/DonationCardDummy"
import { donationStyles } from "./DonationStyles";
import { divStyle } from "./DonationStyles";
import "./DonationCSS.css";
import Background from "../../Images/background1.png";
import MuiAlert from '@material-ui/lab/Alert';


let sum = 0;

class DonationComponent extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            donations: [{
                "title": "Quick donation"
            }],
            snackbar: {
                open: false,
                message: ""
            }
        }
    }

    componentDidMount() {
        this.refreshCards()
    }

    changeSum = (card, sum) => {

        card.sum += sum;
        axiosInstance.put(DONATIONS_API_ENDPOINT + "/" + card.id, card).then(() => {
            this.refreshCards()
            this.setState({
                snackbar: {
                    open: true,
                    message: "Succesfully donated"
                }
            })
        });

    }

    deleteCard = (cardid) => {
        axiosInstance.delete(DONATIONS_API_ENDPOINT + "/" + cardid).then(() => {
            this.refreshCards()

        });
    }


    changeSumUser = () => {

        let newCard = this.state.donations[0];
        newCard.sum += parseInt(sum);
        console.log(newCard);
        axiosInstance.put(DONATIONS_API_ENDPOINT + "/" + this.state.donations[0].id, newCard).then(() => {
            this.refreshCards()
            this.setState({
                snackbar: {
                    open: true,
                    message: "Succesfully donated"
                }
            })
        });

    }

    handleClose = () => {
        this.setState({
            snackbar: {
                open: false
            }
        })
    }

    refreshCards = () => {
        axiosInstance.get(DONATIONS_API_ENDPOINT).then(response => {
            this.setState({
                donations: response.data
            })
        });
    }


    getSum = (event) => {
        sum = event.target.value;
    }


    render() {

        const { classes } = this.props;
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
                                <DonationCardDummy classes={classes} cards={this.state.donations} changeSum={this.changeSum}></DonationCardDummy>
                            </div>
                            <div className={classes.form} noValidate>
                                <Typography>Or specify your amount:</Typography>
                                <TextField id="outlined-basic"
                                    label="Amount"
                                    variant="outlined"
                                    margin="normal"
                                    required
                                    fullWidth
                                    onChange={this.getSum} />
                                <Button
                                    fullWidth
                                    variant="contained"
                                    color="primary"
                                    className={classes.submit}
                                    onClick={this.changeSumUser}>
                                    Submit
                </Button>
                            </div>
                        </div>
                    </Container>
                    <Snackbar open={this.state.snackbar.open} autoHideDuration={1500} onClose={this.handleClose}>
                        <MuiAlert elevation={6} variant="filled" onClose={this.handleClose} severity="success">
                            {this.state.snackbar.message}
                        </MuiAlert>
                    </Snackbar>
                </React.Fragment>
                <br></br>
            </div>
        )
    }

}

export default withStyles(donationStyles)(DonationComponent)