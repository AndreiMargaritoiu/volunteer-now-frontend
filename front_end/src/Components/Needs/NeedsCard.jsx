import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const NeedsCard = props => {
    return props.cards.map(card => (

        <React.Fragment>
            <br></br>
            <Card>

                <CardContent>

                    <Typography color="textPriamry" gutterBottom>
                        {card.title}
                    </Typography>

                    <Typography color="textPrimary">
                        {card.description}
                    </Typography>

                    <Typography color="textPrimary">
                        {card.date}
                    </Typography>

                    <Typography color="primary">
                        {card.state}
                    </Typography>

                    <Typography color="secondary">
                       {card.city}
                    </Typography>

                </CardContent>

            </Card>
            
            { localStorage.getItem("userType") === "volunteer" ?

                <CardActions>

            {card.state === "Assigned" ?
                    <React.Fragment>

                    <Button size="small" onClick={() => props.dropCard(card.id)}>Drop</Button>
                    <Button size="small" onClick={() => props.doneCard(card.id)}>Done</Button>

                    </React.Fragment>

                : card.state  === "Unassigned" ?

                    <React.Fragment>

                     <Button size="small" onClick={() => props.assignCard(card.id)}>Assign</Button>

                    </React.Fragment>

                :   <React.Fragment></React.Fragment>

                }

                </CardActions>
            :
                <CardActions>

                {card.state === "Unassigned" ?

                    <React.Fragment>

                        <Button size="small" onClick={() => props.updateCard(card.id)}>Update</Button>
                        <Button size="small" onClick={() => props.deleteCard(card.id)}>Delete</Button>

                    </React.Fragment>

                : card.state === "Assigned" ?

                    <React.Fragment>                    
                      
                      <Button size="small" onClick={() => props.deleteCard(card.id)}>Delete</Button>

                    </React.Fragment>

                : <React.Fragment></React.Fragment>

            }

                </CardActions>

            }
            
        </React.Fragment>
    )
    )

};


export default NeedsCard;
