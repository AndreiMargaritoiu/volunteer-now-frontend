import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import MonetizationOnIcon from "@material-ui/icons/MonetizationOn";
import Button from "@material-ui/core/Button";

function Copyright() {
  return (
      <center>
    <Typography variant="body2" color="textSecondary">
      {'Copyright © VolunteerNow '}
     
      {new Date().getFullYear()}
      {'.'}
    </Typography>
    </center>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '70vh',
  },
  main: {
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(2),
  },
  footer: {
    padding: theme.spacing(3, 2),
    marginTop: 'auto',
    backgroundColor:
    '#e8e2da'
  },
}));

export default function StickyFooter() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <footer className={classes.footer}>
        <Container maxWidth="sm">
        <div class="space">
              <br></br>
            </div>

            <center>
              <div>
                <div class="brsmall"></div>
               
                  <Button
                   href="./donations"
                    onclick="./donations"
                    aria-label="Donate"
                    style={{ color: "#2A7549" }}
                    variant="contained"
                    className={classes.button}
                    startIcon={<MonetizationOnIcon />}
                  >
                    Donate Now
                  </Button>
                
              </div>
            </center>
            <br></br>
            <Typography
              variant="subtitle1"
              align="center"
              color="textSecondary"
              component="p"
            ></Typography>
            <Copyright />
        </Container>
      </footer>
    </div>
  );
}