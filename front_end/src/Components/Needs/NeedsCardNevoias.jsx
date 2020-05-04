import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';


const NeedsCardNevoias = props => {
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

                </CardContent>

            </Card>

            <CardActions>

                <Button size="small" onClick={() => props.updateCard(card.id)}>Update</Button>
                <Button size="small" onClick={() => props.saveCard(card.id)}>Save</Button>
                <Button size="small" onClick={() => props.deleteCard(card.id)}>Delete</Button>

            </CardActions>
        </React.Fragment>
    )
    )

};


export default NeedsCardNevoias;
