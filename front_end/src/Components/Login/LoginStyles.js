
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
  
      },
     
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
    text:{
        color: "#f5767d",
        fontSize: "12px",
        textTransform: "initial"

    },
  });
  
  export const divStyle = {
      flex: 1,
     
      backgroundColor: "white",
      borderRadius: "10px",
      padding: "50px",
      
      
  }
  