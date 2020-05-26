import React from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import { Typography, Button, withStyles} from "@material-ui/core"
import { donationCardStyles } from "./DonationsCardStyles";
import "./DonationsCardCSS.css"

const DonationCardDummy = props => {

    return props.cards.map(card => (
        <React.Fragment>
    
            
                
            <Card className = {props.classes.cards}>
        
                <CardContent>

                    <Typography color="textPriamry" gutterBottom>
                        {card.title}
                    </Typography>

                    <Typography color="textPrimary">
                        {card.description}
                    </Typography>

                    <Typography variant="body2" component="p">
                        {card.sum}
                    </Typography>

                </CardContent>

                <CardActions>
                <div className="main4">
                    <Button  className = {props.classes.submit3}
                        style = {
                            {
                                maxWidth: '70px', maxHeight: '35px', minWidth: '70px', minHeight: '35px',
                                color: "#e8e2da",
                                 
                            }}
                        variant="contained"
                        onClick={() => props.changeSum(card, 50)}>
                        $50
                    </Button>
                    <Button className = {props.classes.submit3}
                        style = {
                            {
                                maxWidth: '70px', maxHeight: '35px', minWidth: '70px', minHeight: '35px',
                                color: "#e8e2da",
                                
                            }}
                        variant="contained"
                        onClick={() => props.changeSum(card, 100)}>
                        $100
                    </Button>
                    <Button className = {props.classes.submit3}
                        style = {
                            {
                                maxWidth: '70px', maxHeight: '35px', minWidth: '70px', minHeight: '35px',
                                color: "#e8e2da",
                                 
                            }}
                        
                        variant="contained"
                        onClick={() => props.changeSum(card, 150)}>
                    $150
                    </Button>
                </div>
                </CardActions>
 
            </Card>
         
            

        </React.Fragment>

    )
    )

};


export default withStyles(donationCardStyles)(DonationCardDummy);
