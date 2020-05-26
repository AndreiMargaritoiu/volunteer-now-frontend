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
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';

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
                                Your involvement in terms of financial means will contribute to our
                                fund, allowing us to ensure coverage of the material needs our
                                users might stumble upon. You can either select one of  the amounts
                                displayed on the card bellow:
                            </Typography>
                            <div style={divStyle}>
                                <DonationCardDummy classes={classes} cards={this.state.donations} changeSum={this.changeSum}></DonationCardDummy>
                            </div>
                            <div className={classes.form} noValidate>
                            <Typography component="h5" variant="h10">
                                or enter a specific amount you desire:
                            </Typography>
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
                                    Submit donation
                                </Button>
                                <Button
                                href="./homepage"
                                style={{
                                    fontSize: "14px",
                                    color: "#6291b0",
                                    borderColor: "#6291b0",
                                    textTransform: "initial",
                                }}
                                className={classes.submit7}
                                fullWidth
                                variant="outlined"
                                startIcon={<HomeOutlinedIcon />}
                            >
                                {" "}
                                Home
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