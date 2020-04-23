import React from "react";
import Button from "@material-ui/core/Button";
import "./Homepage.css";
import Typography from "@material-ui/core/Typography";
import IconButton from '@material-ui/core/IconButton';
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';

class Homepage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div class="main">
        <link
          rel="stylesheet"
          type="text/css"
          href="//fonts.googleapis.com/css?family=Six+Caps"
        />
        <div class="title">
          <Typography component="h1" variant="h5">
            <h1>VOLUNTEER NOW</h1>
          </Typography>
        </div>
        <div class="buttonDiv">
          <Button
            style={{
              minWidth: "300px",
              minHeight: "50px",
              fontSize: "30px",
              color: "#a0b7c6",
              fontFamily: "Helvetica",
              textTransform: "capitalize",
              backgroundColor: "#e8e2da"
            }}
            
            variant="contained"
          >
            Join Now
          </Button>
          
          
        </div>
        <IconButton aria-label="Donate">
        
        <MonetizationOnIcon/>
      </IconButton>
      </div>
    );
  }
}
export default Homepage;
