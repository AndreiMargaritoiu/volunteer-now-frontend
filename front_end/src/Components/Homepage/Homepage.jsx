import React from "react";
import Button from "@material-ui/core/Button";
import "./Homepage.css";
import Typography from "@material-ui/core/Typography";
import IconButton from '@material-ui/core/IconButton';
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';
import Popover from '@material-ui/core/Popover';
import { stylesHomepage } from "./HomePageStyle";
import { withStyles } from "@material-ui/core/styles";
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import { tileData } from './HomePageStyle';
import InfoIcon from '@material-ui/icons/Info';

class Homepage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      img: " ",
      title: " ",
      open: false,
      anchorEl: {},
      option: ""
    }
  }

  handlePopoverClose = () => {
    this.setState({
      open: false,
      anchorEl: null
    });
  }

  handlePopoverOpen = (event) => {
    this.setState({
      open: true,
      anchorEl: event.currentTarget
    });
  }
  handlePopoverClose1 = () => {
    this.setState({
      open: false,
      anchorEl: null,
      option: ""
    });
  }

  handlePopoverOpen1 = (event, optiune) => {

    this.setState({
      open: true,
      anchorEl: event.currentTarget,
      option: optiune
    });
  }

  render() {
    const { classes } = this.props;
    const { classes2 } = this.props;
    return (
      <React.Fragment>
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

          <div class="subtitle">
            <Typography
              style={{
                color: "white"
              }}>
              <h2>helping hands, caring hearts</h2>
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

          <IconButton aria-label="Donate" style={{ color: "#2A7549" }}
            onMouseEnter={this.handlePopoverOpen}
            onMouseLeave={this.handlePopoverClose}>
            <Popover
              id="mouse-over-popover"
              className={classes.popover}
              classes={{
                paper: classes.paper,
              }}
              open={this.state.open}
              anchorEl={this.state.anchorEl}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              onClose={this.handlePopoverClose}
              disableRestoreFocus
            >
              <Typography>Donate</Typography>
            </Popover>
            <MonetizationOnIcon />
          </IconButton>

        </div>

        <div>

        <GridList className={classes2.gridList} cellHeight='auto' cols='3' spacing='40'>
          {tileData.map((tile) => (
            <GridListTile key={tile.title}>
              <img src={tile.img} />

              <GridListTileBar
                classes={{
                  root: classes2.titleBar,
                  title: classes2.title,
                }
                }
                actionIcon={
                  <IconButton aria-label={`info about ${tile.title}`} className={classes2.icon}
                    onClick={(event) => this.handlePopoverOpen1(event, tile.title)}
                  >
                    <InfoIcon />
                  </IconButton>
                }
              />

            </GridListTile>

          ))}

        </GridList>

        <Popover

          className={classes2.popover}
          classes2={{
            paper: classes2.paper,
          }}
          open={this.state.open}
          anchorEl={this.state.anchorEl}
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'left',
          }}
          transformOrigin={{
            vertical: 'bottom',
            horizontal: 'right',
          }}

          onClose={this.handlePopoverClose1}
          disableRestoreFocus
        >
          {this.state.option === "need" ? <React.Fragment>
            <Typography> Financial issues </Typography>
            <Typography> Running errands </Typography>
            <Typography> Shopping for food/med supplies </Typography>
            <Typography> Pet support </Typography>
          </React.Fragment> : this.state.option === "donor" ? <React.Fragment>
            <Typography>  Providing med supplies </Typography>
            <Typography> Providing food </Typography>
            <Typography> Bills and rent payment </Typography>
            <Typography> Small loans </Typography>
          </React.Fragment> : this.state.option === "volunteer" ? <React.Fragment>
            <Typography>  Running errands </Typography>
            <Typography> Delivery services </Typography>
            <Typography> Pet support </Typography>
          </React.Fragment> :
                <React.Fragment>
                </React.Fragment>
          }

        </Popover>

        </div>

        </React.Fragment>
        
    );
  }
}

export default withStyles(stylesHomepage)(Homepage);
