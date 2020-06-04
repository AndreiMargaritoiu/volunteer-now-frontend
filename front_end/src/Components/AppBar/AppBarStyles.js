import { deepOrange } from "@material-ui/core/colors";

export const appBarStyle = theme => ({
    root: {
        flexGrow: 1,
      },
      menuButton: {
        marginRight: theme.spacing(2),
      },
      title: {
        flexGrow: 1,
        flex: 1
      },
      avatar: {
        color: theme.palette.getContrastText(deepOrange[500]),
        backgroundColor: deepOrange[500],
        margin: theme.spacing(1),
        marginRight:theme.spacing(-0.5)

      },
      avatar1: {
        margin: theme.spacing(0),
        flexGrow: 1,
        width: "200px",
         height: "60px",
      }


});