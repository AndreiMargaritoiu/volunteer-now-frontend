import React from "react"
import { fabStyle } from "./FABStyles";
import { Fab, withStyles } from "@material-ui/core";
import AddIcon from '@material-ui/icons/Add';
import { Typography, Divider, TextField, Button, Modal, Container, Avatar } from "@material-ui/core"
import axiosInstance from "../../../Axios/Axios"
import './FABStylesCSS.css';
import { NEEDS_API_ENDPOINT } from "../../../Utils/utils";



class FABComponent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            openModal : false
        }
    }

    openModal = () => {
        this.setState({openModal : true })
    } 

    closeModal = () => {
        this.setState({openModal : false});
    }

    createNeed = () => {
        axiosInstance.post(NEEDS_API_ENDPOINT + '/' + localStorage.getItem("authToken"), {"Title": this.Title, "Description": this.Description})
        .then(() => {
            this.setState({openModal : false});
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
                    <Fab className={classes.fabCreate}  color = "secondary"aria-label="edit" onClick = {this.openModal} >
                        <AddIcon />
                    </Fab>
                    <Container component="main" maxWidth="xs">   
                        <div className={classes.paper}>
                        
                            <Modal
                                open = {this.state.openModal}
                                aria-labelledby="simple-modal-title"
                                aria-describedby="simple-modal-description"
                                >
                                <div className = "modal-container">
                                    <Container component="main" maxWidth="xs">   
                                
                                        <div className={classes.paper}>
                                            
                                            <Avatar className={classes.avatar}>
                                                VN
                                            </Avatar>

                                            <Typography component="h5" variant="h5">
                                                Add Need!
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
                                            <Button
                                                fullWidth
                                                variant="contained"
                                                color="primary"
                                                onClick={this.createNeed}   
                                                >
                                                Create Need
                                            </Button>
                                            <Divider></Divider>
                                            <Button
                                                fullWidth
                                                variant="contained"
                                                color="primary"
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
                </React.Fragment>
            )
        }

    }

}


export default withStyles(fabStyle)(FABComponent);