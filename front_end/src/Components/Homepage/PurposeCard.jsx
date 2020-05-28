import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Mission from "../../Images/mission.png"
import Assistance from "../../Images/assistance.png"
import Help from "../../Images/help.png"
import Deliver from "../../Images/deliver.png"
import Fund from "../../Images/fund.png"
import {Avatar} from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    textAlign: "center",
    maxWidth: 500,
    
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 30,
  },
  pos: {
    marginBottom: 12,
  },
  subtitle: {
    fontSize: 20,
  },
  large: {
    width: '30px',
    height: '30px',
  },
});

export default function SimpleCard() {
  const classes = useStyles();


  return (
    <Card
      className={classes.root}
      variant="outlined"
      style={{ borderColor: "#ffffff" }}
    >
      <CardContent>
        <Typography
          className={classes.title}
          color="#000000"
          gutterBottom
          style={{ fontWeight: "bold" }}
        >
          Why use VolunteerNow?
        </Typography>
        <br></br>
        <center><Avatar src = {Mission} ></Avatar></center>
        <Typography
          className={classes.subtitle}
          color="#000000"
          style={{ fontWeight: "bold" }}
        >
          {/* be{bull}nev{bull}o{bull}lent */}
          Our purpose
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          Given the current context, leaving the house to run errands might turn
          out difficult, especially for people within a high risk category.
        </Typography>
        <center><Avatar src = {Assistance} ></Avatar></center>
        <Typography
          className={classes.subtitle}
          color="#000000"
          style={{ fontWeight: "bold" }}
        >
          How can you get assistance?
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
        Create an account as a person in need and head to the dashboard to tell volunteers how they can be of help.
        </Typography>
        <center><Avatar src = {Help} ></Avatar></center>
        <Typography
          className={classes.subtitle}
          color="#000000"
          style={{ fontWeight: "bold" }}
        >
          How can you help?
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
        Creating a volunteer account will give you access to people's needs and, depending on your availability, you can assign them to you.
        </Typography>
        <center><Avatar src = {Deliver} ></Avatar></center>
        <Typography
          className={classes.subtitle}
          color="#000000"
          style={{ fontWeight: "bold" }}
        >
          Delivering your needs
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
        Our volunteers will offer their assistance in full safety & hygiene conditions.
        </Typography>
        <center><Avatar src = {Fund}  ></Avatar></center>
        <Typography
          className={classes.subtitle}
          color="#000000"
          style={{ fontWeight: "bold" }}
        >
          Our donations fund
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
        The money coming from donations goes to our fund, allowing us to further send them to partner organizations.
        </Typography>
      </CardContent>
     
    </Card>
  );
}
