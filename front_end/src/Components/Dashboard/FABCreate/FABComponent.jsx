import React from "react"
import { fabStyle } from "./FABStyles";
import { Fab, withStyles } from "@material-ui/core";
import AddIcon from '@material-ui/icons/Add';
import { Typography, Divider, TextField, Button, Modal, Container, Avatar } from "@material-ui/core"
import axiosInstance from "../../../Axios/Axios"
import './FABStylesCSS.css';
import { NEEDS_API_ENDPOINT } from "../../../Utils/utils";
import Logo from "../../../Images/logo2.png";
import { divStyle } from "./FABStyles";

let userId = localStorage.getItem("authToken");

class FABComponent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            openModal: false
        }
    }

    openModal = () => {
        this.setState({ openModal: true })
    }

    closeModal = () => {
        this.setState({ openModal: false });
    }

    createNeed = () => {
        axiosInstance.post(NEEDS_API_ENDPOINT + '/' + localStorage.getItem("authToken"), { "Title": this.Title, "Description": this.Description })
            .then(() => {
                this.setState({ openModal: false });
                window.location.reload(false)
            })
    }

    setTitle = (event) => {
        this.Title = event.target.value;
    }

    setDescription = (event) => {
        this.Description = event.target.value;
    }

    render() {
        const { classes } = this.props;

        if (localStorage.getItem("userType") === "volunteer") {
            return (
                <React.Fragment>
                </React.Fragment>
            )
        } else {
            return (
                <React.Fragment>
                    <Fab className={classes.fabCreate} color="secondary" aria-label="edit" onClick={this.openModal} >
                        <AddIcon />
                    </Fab>
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

                                            <Typography component="h1" variant="h5">
                                                Let us know what you need
                                            </Typography>
                                            <TextField
                                                autoComplete="needTitle"
                                                name="title"
                                                margin="normal"
                                                variant="outlined"
                                                required
                                                fullWidth
                                                id="needTitle"
                                                label="Title"
                                                autoFocus
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
                                                onChange={this.setDescription}
                                            />
                                            <Button className={classes.submit}
                                                fullWidth
                                                variant="contained"
                                                color="primary"
                                                onClick={this.createNeed}
                                            >
                                                Create Need
                                            </Button>
                                            <Divider></Divider>
                                            <Button className={classes.submit}
                                                onClick={this.closeModal}
                                                style={{
                                                    fontSize: "12px",
                                                    color: "#6291b0",
                                                    borderColor: "#6291b0",
                                                    textTransform: "initial",
                                                  }}
                                                  className={classes.submit2}  
                                                fullWidth
                                                variant= "outlined"
                                            >
                                                Cancel
                                            </Button>
                                        </div>
                                    </Container>
                                </div>

                            </Modal>
                        </div>
                    </Container>
                </React.Fragment>
            )
        }

    }

}


export default withStyles(fabStyle)(FABComponent);