import React from "react"
import { fabStyle } from "./FABStyles";
import { Fab, withStyles } from "@material-ui/core";
import AddIcon from '@material-ui/icons/Add';

class FABComponent extends React.Component{

    constructor(props){
        super(props);
    }

    render(){
        const {classes} = this.props;
        if (localStorage.getItem("userType") === "volunteer") {
            return(
                <React.Fragment>
                </React.Fragment>
            )
        } else {
            return (
                <React.Fragment>
                    <Fab className = {classes.fabCreate} color="secondary" aria-label="edit">
                        <AddIcon />
                    </Fab>
                </React.Fragment>
            )           
        }
        
    }

}


export default withStyles(fabStyle)(FABComponent);