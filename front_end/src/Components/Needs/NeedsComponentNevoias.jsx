import React from "react"
import axiosInstance from "../../Axios/Axios"
import { NEEDS_API_ENDPOINT } from "../../Utils/utils"
import { Typography, Divider, TextField, Button } from "@material-ui/core"
import NeedsCard from "./NeedsCard"
import Modal from "./Modal"

let Title = "";
let Description = "";
let idToUpdate = "";

class NeedsComponentNevoias extends React.Component {

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
        axiosInstance.get(NEEDS_API_ENDPOINT + "/" + this.uid).then(response => {
            this.setState({
                needs: response.data
            })
        });
    }
    
    createCard = () => {
        console.log("TODO create need")
    }

    updateCard = (cardid) => {
        axiosInstance.get(NEEDS_API_ENDPOINT + '/getNeed/' + cardid).then(response => {
            this.setState({
                need: response.data
            })       
            idToUpdate = cardid; 
        });
        this.setState({ show: true });
    }

    saveCard = () => {   
        console.log(idToUpdate)
        console.log(this.state.need.title)
        console.log(this.state.need.description)
        axiosInstance.put(NEEDS_API_ENDPOINT + '/' + idToUpdate, {
            "title": this.state.need.title, "description": this.state.need.description}).then(() => {
                alert("Need updated successfully");
                this.refreshCards()
                this.setState({ show: false });
        })
    }

    deleteCard = (cardid) => {
        axiosInstance.delete(NEEDS_API_ENDPOINT + "/" + cardid).then(() => {
            this.refreshCards()
        })
    }

    setTitle = (event) => {
        Title = event.target.value;
        this.setState({need : {
            title : event.target.value,
            description  : Description,
        }});
    }

    setDescription = (event) => {
        Description = event.target.value;
        this.setState({need : {
            title: Title,
            description : event.target.value
        }});
    }

    hideModal = () => {
        this.setState({ show: false });
    };

    render() {
        return (
            <React.Fragment>
                <Typography variant="h4">Nevoias dashboard</Typography>
                <Divider></Divider>
                <NeedsCard cards={this.state.needs} updateCard={this.updateCard} deleteCard={this.deleteCard}></NeedsCard>
                { this.state.show ? 
                    <Modal show={this.state.show} handleClose={this.hideModal} handleSave={this.saveCard}>
                        <p>Title:</p>
                        <TextField id="outlined-basic" variant="outlined" value={this.state.need.title} onChange={this.setTitle} />
                        <p>Description:</p>
                        <TextField fullWidth multiline = {true} id="outlined-basic" variant="outlined" value={this.state.need.description} onChange={this.setDescription} />
                    </Modal> 
                : 
                null}
                <br />
            </React.Fragment>
        )
    }
    
}

export default NeedsComponentNevoias