import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';


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
        </React.Fragment>
    )
    )

};


export default NeedsCardNevoias;
