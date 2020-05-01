import React from "react";
import Button from "@material-ui/core/Button";
import "./Homepage.css";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import MouseOverPopover from "./Elements/donateButton";
import SingleLineGridList from "./Elements/gridList";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

class Homepage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      img: " ",
      title: " ",
      open: false,
      anchorEl: {},
      option: "",
    };
  }

  handlePopoverClose = () => {
    this.setState({
      open: false,
      anchorEl: null,
    });
  };

  handlePopoverOpen = (event) => {
    this.setState({
      open: true,
      anchorEl: event.currentTarget,
    });
  };
  handlePopoverClose1 = () => {
    this.setState({
      open: false,
      anchorEl: null,
      option: "",
    });
  };

  handlePopoverOpen1 = (event, optiune) => {
    this.setState({
      open: true,
      anchorEl: event.currentTarget,
      option: optiune,
    });
  };

  render() {
    // const { classes } = this.props;

    return (
      <React.Fragment>
        <div>
          <div class="main">
            <MouseOverPopover />
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

            <div class="subtitle">
              <Typography
                style={{
                  color: "white",
                }}
              >
                <h2>helping hands, caring hearts</h2>
              </Typography>
            </div>
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
                backgroundColor: "#e8e2da",
              }}
              variant="contained"
            >
              Join Now
            </Button>
          </div>
        </div>

        <div class="space">
          <br></br>
        </div>
        <SingleLineGridList />
        <div class="space">
          <br></br>
        </div>
        <footer class="Footer">
          <div class="space">
            <br></br>
          </div>
          <Typography variant="h6" align="center" gutterBottom>
            Footer
          </Typography>
          <Typography
            variant="subtitle1"
            align="center"
            color="textSecondary"
            component="p"
          >
            Something here to give the footer a purpose!
          </Typography>
          <Copyright/>
        </footer>
      </React.Fragment>
    );
  }
}

export default Homepage;
