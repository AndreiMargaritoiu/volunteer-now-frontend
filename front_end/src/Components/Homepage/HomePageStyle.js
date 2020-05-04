import imageVol from "../../Images/volunteer.png";
import imageNeed from "../../Images/need.png";
import imageDon from "../../Images/donor.png";

export const stylesHomepage = (theme) => ({
  popover: {
    pointerEvents: "none",
  },
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    flexWrap: "nowrap",
    transform: "translateZ(0)",
  },
  titleBar: {
    background:
      "linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)",
  },
  icon: {
    color: "rgba(255, 255, 255, 0.54)",
  },
  container: {
    display: 'grid',
    gridTemplateColumns: 'repeat(12, 1fr)',
    gridGap: theme.spacing(3),
  },
 
});

export const tileData = [
  {
    img: imageVol,
    title: "volunteer",
  },

  {
    img: imageDon,
    title: "donor",
  },

  {
    img: imageNeed,
    title: "need",
  },
];
