import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';


const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
    marginRight : "5vw",
    marginLeft : "5vw",
    marginBottom: 40,
  },
  media: {
    height: 200,
    width: 345,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: "#f5767d",
  },
}));

export const RecipeReviewCard = (props) => {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
 

  

  const long = props.long;
  return (

    
    <Card className={classes.root}>
   <script src="jquery.min.js"></script>
  
      <CardHeader
      style = {{background : "#a0b7c6"}}
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            {props.letter}
          </Avatar>
        }
      
        title={props.title}
        subheader=""
      />
      <CardMedia
        className={classes.media}
        image= {props.image}
        title={props.title}
      />
      <CardContent  style = {{background : "#a0b7c6"}}>
        <Typography variant="body2" color="textSecondary" component="p">
          {props.short}
        </Typography>
      </CardContent>
      <CardActions disableSpacing  style = {{background : "#a0b7c6"}}>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent  style = {{background : "#a0b7c6"}}>
          <Typography paragraph>Info:</Typography>
        
          {long.split('\n').map(long=><Typography paragraph>{long}</Typography>)}
          
        </CardContent>
      </Collapse>
    </Card>
  
  );
}

