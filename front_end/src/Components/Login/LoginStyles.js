import Background from "../../Images/background.png"

export const loginStyles = (theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: "white",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: "#f5767d",
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    backgroundColor: "#6291b0",
   
    '&:hover':{
      backgroundColor: "#173549",
      color: '#FFF'

    }
  },
  notchedOutline: {
    borderColor: "#6291b0 !important",
  },
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: "#eaeaea"
  },
  large: {
    width: theme.spacing(7),
    height: theme.spacing(7),
  },
  submit1:{
    margin: theme.spacing(0, 0, 2),
    backgroundColor: "none",
    borderColor: "#6291b0",
    color: "#6291b0",
    fontSize: "12px",
    textTransform: "initial",
    '&:hover':{
        
        color: '#6291b0',
        borderColor: "#6291b0"
    }
  },
 label:{
      color: "red",
     
  },
  palette: {
    primary: {
      main: 'white',
    },
    secondary: { main: 'white' },
    grey: { main: 'white' }
  },
  overrides: {
    MuiOutlinedInput: {
      root: {
        position: 'relative',
        '& $notchedOutline': {
          borderColor: '#2EFF22',
        },
        '&:hover:not($disabled):not($focused):not($error) $notchedOutline': {
          borderColor: '#2EFF22',
          // Reset on touch devices, it doesn't add specificity
          '@media (hover: none)': {
            borderColor: '#2EFF22',
          },
        },
        '&$focused $notchedOutline': {
          borderColor: '#2EFF22',
          borderWidth: 1,
        },
      },
    },
    MuiFormLabel: {
      root: {
        '&$focused': {
          color: '#2EFF22'
        }
      }
    }
  }

});

export const divStyle = {
    flex: 1,
    padding: 24,
    backgroundColor: "white",
    borderRadius: "10px",
    padding: "50px",
    
    
}

