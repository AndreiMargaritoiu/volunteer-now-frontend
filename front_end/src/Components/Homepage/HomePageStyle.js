import Volunteer from "../../Images/volunteer1.png"
import Donor from "../../Images/donor1.png"
import Person from "../../Images/person1.png"

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
    display: "grid",
    gridTemplateColumns: "repeat(12, 1fr)",
    gridGap: theme.spacing(3),
  },
});

export const tileData = [
  {

            letter : "V",
            image : Volunteer,
            title : "Volunteer",
            short : "A simple act of kindness always brings up another. Join our team now and help those in need. ",
            long : "Sign up and become a volunteer to help people with:  \n - Financial issues \n - Running errands \n - Shopping for food/med supplies \n - Pet supply"
  },

  {
    letter : "D",
    image : Donor,
    title : "Donor",
    short : "Not all heroes have superpowers, some have money. Donate now to charities and help in critical times. ",
    long : "You do not have enough time, but you want to help as well? Scroll down and find the Donate button directly. You will help with: \n - Providing med supplies/food\n - Bills and rent payment \n No Sign up needed for this step.  "
  },

  {
            letter : "P",
             image : Person,
             title : "Person in Need",
             short : "We are here to help you get through difficult times. Tell us your needs and we'll be handling it in no time.",
             long : "Sign up to let us know what you need so we can see them and proceed to help as fast as possible. "
             + "\n We will help with: \n - Running errands \n - Delivery services \n - Pet support"
  },
];

