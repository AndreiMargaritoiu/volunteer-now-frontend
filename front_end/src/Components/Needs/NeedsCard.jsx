import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import CardMedia from "@material-ui/core/CardMedia";

const NeedsCard = (props) => {
  return props.cards.map((card) => (
    <React.Fragment>
      <br></br>
      <Card className={"MuiPostCard--02"}>
        <CardMedia className={"MuiCardMedia-root"} />
        <CardContent className={"MuiCardContent-root"}>
          <Typography className={"MuiTypography--date"} variant={"overline"}>
            {card.date}
          </Typography>

          <Typography
            className={"MuiTypography--heading"}
            variant={"h6"}
            gutterBottom
          >
            {card.title}
          </Typography>
          <Typography className={"MuiTypography--subheading"} style = {{fontSize : "12px"}}>
            {card.description}
          </Typography>
          <Typography
            className={"MuiTypography--location"}
            variant={"overline"}
          >
            {card.city}
          </Typography>
         

          {localStorage.getItem("userType") === "volunteer" ? (
            <CardActions>
              {card.state === "Assigned" ? (
                <React.Fragment>
                  <Button className={"MuiButton--readMore"} size="small" onClick={() => props.dropCard(card.id)}>
                    Drop
                  </Button>
                  <Button className={"MuiButton--readMore"} size="small" onClick={() => props.doneCard(card.id)}>
                    Done
                  </Button>
                </React.Fragment>
              ) : card.state === "Unassigned" ? (
                <React.Fragment>
                  <Button
                    size="small"
                    onClick={() => props.assignCard(card.id)} className={"MuiButton--readMore"}
                  >
                    Assign
                  </Button>
                </React.Fragment>
              ) : (
                <React.Fragment></React.Fragment>
              )}
            </CardActions>
          ) : (
            <CardActions>
              {card.state === "Unassigned" ? (
                <React.Fragment>
                  <Button
                    size="small"
                    onClick={() => props.updateCard(card.id)} className={"MuiButton--readMore"}
                  >
                    Update
                  </Button>
                  <Button
                    size="small"
                    onClick={() => props.deleteCard(card.id)} className={"MuiButton--readMore"}
                  >
                    Delete
                  </Button>
                </React.Fragment>
              ) : card.state === "Assigned" ? (
                <React.Fragment>
                  <Button
                    size="small"
                    onClick={() => props.deleteCard(card.id)} className={"MuiButton--readMore"}
                  >
                    Delete
                  </Button>
                </React.Fragment>
              ) : (
                <React.Fragment></React.Fragment>
              )}
            </CardActions>
          )}
        </CardContent>
      </Card>
    </React.Fragment>
  ));
};

NeedsCard.getTheme = (muiBaseTheme) => ({
  MuiCard: {
    root: {
      "&.MuiPostCard--02": {
        borderRadius: muiBaseTheme.spacing.unit * 2, // 16px
        marginTop: muiBaseTheme.spacing(0),
        transition: "0.3s",
        boxShadow: "0px 12px 12px rgba(34, 35, 58, 0.2)",
        textAlign: 'center',
        position: "relative",
        marginLeft: muiBaseTheme.spacing(3),
        marginBottom: muiBaseTheme.spacing(5),
        overflow: "initial",
        background: "#ffffff",
        display: "flex",
        alignItems: "center",
        padding: `${muiBaseTheme.spacing.unit * 5}px 0`,
        "&:hover": {
          transform: "translateY(-3px)",
          boxShadow: "0 4px 20px 0 rgba(0,0,0,0.12)",
        },
        "& .MuiCardMedia-root": {
          flexShrink: 0,
          width: "10%",
    
          paddingTop: "15%",
          transform: "translateX(-24%)",
          boxShadow: "4px 4px 20px 1px rgba(232,226,218,1)",
          borderRadius: muiBaseTheme.spacing.unit * 2, // 16
          backgroundImage: "linear-gradient(147deg, #e8e2da 0%, #6291b0 74%)",
          backgroundColor: muiBaseTheme.palette.common.white,
          overflow: "hidden",
          "&:after": {
            content: '" "',
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundImage: "linear-gradient(147deg, #e8e2da 0%, #6291b0 74%)",
            borderRadius: muiBaseTheme.spacing.unit * 2, // 16
            opacity: 0.5,
          },
        },
        "& .MuiCardContent-root": {
          textAlign: "left",
          paddingLeft: 0,
          padding: muiBaseTheme.spacing.unit * 2,
            
        },
        "& .MuiTypography--heading": {
          fontWeight: "bold",
        },
        "& .MuiTypography--subheading": {
          marginBottom: muiBaseTheme.spacing.unit * 2,
        },
        "& .MuiButton--readMore": {
          backgroundImage: "linear-gradient(147deg, #6291b0 0%, #6291b0 74%)",
          boxShadow: "0px 4px 32px rgba(232,226,218,1)",
          borderRadius: 100,
          paddingLeft: 24,
          paddingRight: 24,
          color: "#ffffff",
          marginRight: muiBaseTheme.spacing(2),
          marginTop: muiBaseTheme.spacing(2),
        },
        "& .MuiTypography--location": {
          paddingRight: 24,
          fontSize: 10,
          marginRight: muiBaseTheme.spacing(2),
          marginTop: muiBaseTheme.spacing(0),
        },
        "& .MuiTypography--state": {
          paddingRight: 24,
          fontSize: 2,
          
          marginRight: muiBaseTheme.spacing(2),
          marginTop: muiBaseTheme.spacing(0),
        },
      },
    },
  },
});
NeedsCard.metadata = {
  name: "Post Card II",
  description: "Personal Post",
  
};

export default NeedsCard;
