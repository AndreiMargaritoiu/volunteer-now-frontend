export const fabStyle = theme => ({
    root: {
        flexGrow: 1,
    },
    fabCreate: {
        margin: 0,
        top: 'auto',
        left: 'auto',
        bottom: theme.spacing(3),
        right: theme.spacing(3),
        position: 'fixed',
        backgroundColor: "#d9c1bb",
        color : "#ffffff",
        '&:hover':{
          
            backgroundColor: '#6291b0',
            borderColor: "#6291b0"
        }
    
    },
    paper: {
        marginTop: theme.spacing(4),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
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
        margin: theme.spacing(0, 0, 2),
        backgroundColor: "#6291b0",
        '&:hover':{
        backgroundColor: "#173549",
        color: '#FFF'
    }
      },
      submit2: {
        margin: theme.spacing(0, 0, 2),
        '&:hover':{
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


});

export const divStyle = {
    flex: 1,
    backgroundColor: "white",
    borderRadius: "10px",
    padding: "50px",
    
    
}
