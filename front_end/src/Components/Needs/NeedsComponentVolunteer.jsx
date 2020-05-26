import React from "react"
import axiosInstance from "../../Axios/Axios"
import { NEEDS_API_ENDPOINT } from "../../Utils/utils"
import { REGISTER_API_ENDPOINT } from "../../Utils/utils"
import { Typography, Divider, Snackbar } from "@material-ui/core"
import NeedsCard from "./NeedsCard"
import Component from "./NeedsCard";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import MuiAlert from '@material-ui/lab/Alert';

const muiBaseTheme = createMuiTheme();




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
            }],
            doneNeeds: [{
                "title" : "default",
                "description" : "default"
            }],
            snackbar:{
                open:false,
                message:"Default message"
            }

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
        })
        axiosInstance.get(NEEDS_API_ENDPOINT + "/get/done/" + this.uid).then(response => {
            this.setState({
                doneNeeds: response.data
            })
        })
    }   

    assignCard = (cardid) => {
        axiosInstance.put(REGISTER_API_ENDPOINT + "/assign/" + this.uid + "/" + cardid).then(() => {
           this.refreshCards()
        });
        this.setState({
            snackbar: {
                open: true,
                message: "Need assigned"
            }
        })

 
    }

    dropCard = (cardid) => {
        console.log("card dropped");
        axiosInstance.put(REGISTER_API_ENDPOINT + "/unassign/" + this.uid + "/" + cardid).then(() => {
            this.refreshCards()
         });
         this.setState({
            snackbar: {
                open: true,
                message: "Need dropped"
            }
        })
         
    }

    doneCard = (cardid) => {
        console.log("card done");
        axiosInstance.put(REGISTER_API_ENDPOINT + "/done/" + this.uid + "/" + cardid).then(() => {
            this.refreshCards()
         });
         this.setState({
            snackbar: {
                open: true,
                message: "Need done!"
            }
        })
    }

     handleClose = () =>{
        this.setState({
            snackbar: {
                open: false,
                message: ""
            }
        })
    }

    render() {
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
                <Typography variant="h6">Assigned needs</Typography>
                <NeedsCard cards={this.state.assignatedNeeds} dropCard={this.dropCard} doneCard={this.doneCard}></NeedsCard>
                <Divider></Divider>
                <Typography variant="h6">Unassigned needs</Typography>
                <NeedsCard cards={this.state.needs} assignCard={this.assignCard}></NeedsCard>
                <Divider></Divider>
                <Typography variant="h6">Done needs</Typography>
                <NeedsCard cards={this.state.doneNeeds}></NeedsCard>
                </MuiThemeProvider>
                
                <Snackbar open={this.state.snackbar.open} autoHideDuration={3000} onClose={this.handleClose}>
                    <MuiAlert elevation={6} variant="filled" onClose={this.handleClose} severity="success">
                        {this.state.snackbar.message}
                    </MuiAlert>
                </Snackbar>

            </React.Fragment>
        )
    }

}


export default NeedsComponentVolunteer