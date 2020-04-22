import React from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';


const DonationCardDummy = props => {
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

                    <Typography variant="body2" component="p">
                        {card.sum}
                    </Typography>

                </CardContent>

                <CardActions>

                    <Button size="small" onClick={() => props.changeSum(card, 50)}>Donate 50</Button>
                    <Button size="small" onClick={() => props.changeSum(card, 100)}>Donate 100</Button>
                    <Button size="small" onClick={() => props.changeSum(card, 150)}>Donate 150</Button>
                    <Button size="small" onClick={() => props.deleteCard(card.id)}>Delete</Button>

                </CardActions>

            </Card>
        </React.Fragment>
    )
    )

};


export default DonationCardDummy;
