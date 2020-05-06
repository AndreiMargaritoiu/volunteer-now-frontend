import React from "react";
import Button from "@material-ui/core/Button";
import "./Homepage.css";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import { tileData } from "./HomePageStyle";
import { withStyles } from "@material-ui/core";
import { stylesHomepage } from "./HomePageStyle";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";
import InfoIcon from "@material-ui/icons/Info";
import Popover from "@material-ui/core/Popover";
import Grid from "@material-ui/core/Grid";
import MonetizationOnIcon from "@material-ui/icons/MonetizationOn";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © VolunteerNow "}
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
      option: "",
    });
  };

  handlePopoverOpen = (event, optiune) => {
    console.log(optiune);

    this.setState({
      open: true,
      anchorEl: event.currentTarget,
      option: optiune,
    });
  };

  render() {
    const { classes } = this.props;

    return (
      <React.Fragment>
        <div class="root">
          <div>
            <div class="main">
              <link
                rel="stylesheet"
                type="text/css"
                href="//fonts.googleapis.com/css?family=Six+Caps"
              />

              <div class="title">
                <Typography component="h1" variant="h5">
                  <center>
                    <h1>VOLUNTEER NOW</h1>
                  </center>
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
              <Grid container justify="center">
                <Grid item>
                  <a href="./login" target="_self">
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
                      {" "}
                      Join Now
                    </Button>
                  </a>
                </Grid>
              </Grid>
            </div>
          </div>

          <div class="brmedium"></div>

          <div className={classes.root}>
            <GridList
              className={classes.gridList}
              cols={3}
              spacing="100"
              cellHeight="400px"
            >
              {tileData.map((tile) => (
                <GridListTile key={tile.tile}>
                  <img src={tile.img} class="photo" alt=" " />

                  <GridListTileBar
                    title={tile.tile}
                    classes={{
                      root: classes.titleBar,
                      title: classes.title,
                    }}
                    actionIcon={
                      <IconButton
                        aria-label={`info about ${tile.title}`}
                        className={classes.icon}
                      >
                        <InfoIcon
                          aria-owns={
                            this.open ? "mouse-over-popover" : undefined
                          }
                          aria-haspopup="true"
                          onMouseEnter={(event) =>
                            this.handlePopoverOpen(event, tile.title)
                          }
                          onMouseLeave={this.handlePopoverClose}
                        />
                      </IconButton>
                    }
                  />
                </GridListTile>
              ))}
            </GridList>

            <Popover
              id="mouse-over-popover"
              className={classes.popover}
              classes={{
                paper: classes.paper,
              }}
              open={this.state.open}
              anchorEl={this.state.anchorEl}
              anchorOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              transformOrigin={{
                vertical: "bottom",
                horizontal: "right",
              }}
              onClose={this.handlePopoverClose}
              disableRestoreFocus
            >
              {this.state.option === "need" ? (
                <React.Fragment>
                  <Typography> Financial issues </Typography>
                  <Typography> Running errands </Typography>
                  <Typography> Shopping for food/med supplies </Typography>
                  <Typography> Pet support </Typography>
                </React.Fragment>
              ) : this.state.option === "donor" ? (
                <React.Fragment>
                  <Typography> Providing med supplies </Typography>
                  <Typography> Providing food </Typography>
                  <Typography> Bills and rent payment </Typography>
                  <Typography> Small loans </Typography>
                </React.Fragment>
              ) : this.state.option === "volunteer" ? (
                <React.Fragment>
                  <Typography> Running errands </Typography>
                  <Typography> Delivery services </Typography>
                  <Typography> Pet support </Typography>
                </React.Fragment>
              ) : (
                <React.Fragment></React.Fragment>
              )}
            </Popover>
          </div>

          <div class="brmedium"></div>

          <footer class="Footer">
            <div class="space">
              <br></br>
            </div>

            <center>
              <div>
                <div class="brsmall"></div>
                <a
                  id="donate"
                  color="#2A7549"
                  href="./donations"
                  target="_self"
                >
                  <Button
                    onclick="./donations"
                    aria-label="Donate"
                    style={{ color: "#2A7549" }}
                    variant="contained"
                    className={classes.button}
                    startIcon={<MonetizationOnIcon />}
                  >
                    Donate Now
                  </Button>
                </a>
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
          </footer>
        </div>
      </React.Fragment>
    );
  }
}

export default withStyles(stylesHomepage)(Homepage);
