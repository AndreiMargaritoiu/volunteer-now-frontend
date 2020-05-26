import React from "react"
import axiosInstance from "../../Axios/Axios"
import { NEEDS_API_ENDPOINT } from "../../Utils/utils"
import NeedsCard from "./NeedsCard"
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import Component from "./NeedsCard";
import { Typography, Divider, TextField, Button, Modal, Container, Avatar, withStyles, Snackbar } from "@material-ui/core"
import Logo from "../../Images/logo2.png";
import { divStyle } from "./Needs1Styles";
import { needs1Style } from "./Needs1Styles";
import MuiAlert from '@material-ui/lab/Alert';

let Title = "";
let Description = "";
let idToUpdate = "";
const muiBaseTheme = createMuiTheme();


class NeedsComponentNevoias extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            openModal: false,
            needs: [{

            }],
            need: [{
                "title": "default",
                "description": "default"
            }],
            doneNeed: [{
                "title": "default",
                "description": "default"
            }],
            snackbar: {
                open: false,
                message: ""
            }
        }
    }

    componentDidMount() {
        this.uid = localStorage.getItem("authToken");
        this.refreshCards()
    }

    refreshCards = () => {
        axiosInstance.get(NEEDS_API_ENDPOINT + "/" + this.uid).then(response => {
            this.setState({
                needs: response.data
            })
        })
        axiosInstance.get(NEEDS_API_ENDPOINT + "/getDone/" + this.uid).then(response => {
            this.setState({
                doneNeed: response.data
            })
        })
    }

    updateCard = (cardid) => {
        this.setState({ openModal: true })
        axiosInstance.get(NEEDS_API_ENDPOINT + '/getNeed/' + cardid).then(response => {
            this.setState({
                need: response.data
            })
            idToUpdate = cardid;
            Title = response.data.title;
            Description = response.data.description;
        });
    }

    saveCard = () => {
        axiosInstance.put(NEEDS_API_ENDPOINT + '/' + idToUpdate, {
            "title": this.state.need.title, "description": this.state.need.description
        }).then(() => {

            this.refreshCards()
            this.setState({ show: false });
            this.setState({
                snackbar: {
                    open: true,
                    message: "Succesfully updated"
                }
            })
        }).then(() => this.setState({ openModal: false }))
    }

    deleteCard = (cardid) => {
        axiosInstance.delete(NEEDS_API_ENDPOINT + "/" + cardid).then(() => {
            this.refreshCards()
            this.setState({
                snackbar: {
                    open: true,
                    message: "Succesfully deleted"
                }
            })
        })

    }

    setTitle = (event) => {
        Title = event.target.value;
        this.setState({
            need: {
                title: event.target.value,
                description: Description,
            }
        });
    }

    setDescription = (event) => {
        Description = event.target.value;
        this.setState({
            need: {
                title: Title,
                description: event.target.value
            }
        });
    }

    openModal = () => {
        this.setState({ openModal: true })
    }

    closeModal = () => {
        this.setState({ openModal: false });
    }

    handleClose = () => {
        this.setState({
            snackbar: {
                open: false
            }
        })
    }

    render() {
        const { classes } = this.props;
        return (
            <React.Fragment>
                <MuiThemeProvider 
            theme={createMuiTheme({
              typography: {
                useNextVariants: true,
              },
              overrides: Component.getTheme(muiBaseTheme),
            })}
          >
                <Typography variant="h4">Dashboard</Typography>
                <Divider></Divider>
                <Typography variant="h6">Ongoing needs</Typography>
                <NeedsCard cards={this.state.needs} updateCard={this.updateCard} deleteCard={this.deleteCard}></NeedsCard>
                {this.state.openModal ?
                    <Container component="main" maxWidth="xs">
                        <div className={classes.paper} style={divStyle}>
                            <Modal
                                open={this.state.openModal}
                                aria-labelledby="simple-modal-title"
                                aria-describedby="simple-modal-description"
                            >
                                <div className="modal-container" style={divStyle}>
                                    <Container component="main" maxWidth="xs">

                                        <div className={classes.paper}>
                                            <Avatar
                                                alt="Remy Sharp"
                                                src={Logo}
                                                className={classes.large}
                                            />

                                            <Typography component="h5" variant="h5">
                                                Update information about your need
                                        </Typography>
                                            <TextField
                                                autoComplete="needTitle"
                                                defaultValue="default"
                                                name="title"
                                                margin="normal"
                                                variant="outlined"
                                                required
                                                fullWidth
                                                id="needTitle"
                                                label="Title"
                                                autoFocus
                                                value={this.state.need.title}
                                                onChange={this.setTitle}
                                            />

                                            <TextField
                                                variant="outlined"
                                                required
                                                fullWidth
                                                margin="normal"
                                                id="needDescription"
                                                label="Description"
                                                name="needDescription"
                                                autoComplete="ndescription"
                                                defaultValue="default"
                                                value={this.state.need.description}
                                                onChange={this.setDescription}
                                            />
                                            <Button
                                                className={classes.submit}
                                                fullWidth
                                                variant="contained"
                                                color="primary"
                                                onClick={this.saveCard}
                                            >
                                                Update Need
                                        </Button>
                                            <Divider></Divider>
                                            <Button className={classes.submit}
                                                style={{
                                                    fontSize: "12px",
                                                    color: "#6291b0",
                                                    borderColor: "#6291b0",
                                                    textTransform: "initial",
                                                }}
                                                className={classes.submit2}
                                                fullWidth
                                                variant="outlined"
                                                onClick={this.closeModal}
                                            >
                                                Cancel
                                        </Button>
                                        </div>
                                    </Container>
                                </div>

                            </Modal>
                        </div>
                    </Container>
                    :
                    null}
                <Divider></Divider>
                <Typography variant="h6">Delivered needs</Typography>
                <NeedsCard cards={this.state.doneNeed}  deleteCard={this.deleteCard}></NeedsCard>
                </MuiThemeProvider>

                <Snackbar open={this.state.snackbar.open} autoHideDuration={1500} onClose={this.handleClose}>
                    <MuiAlert elevation={6} variant="filled" onClose={this.handleClose} severity="success">
                        {this.state.snackbar.message}
                    </MuiAlert>
                </Snackbar>
              

                

            </React.Fragment>
        )
    }

}


export default withStyles(needs1Style)(NeedsComponentNevoias)