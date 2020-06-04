

export const donationStyles = theme => ({
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
    margin: theme.spacing(3, 0, 0),
    backgroundColor: "#6291b0",
    '&:hover':{
    backgroundColor: "#173549",
    color: '#FFF'
}
  },
  submit2: {
    margin: theme.spacing(7, 5, 3),
    '&:hover':{
    color: '#FFF'
} 
  },
  submit7: {
    margin: theme.spacing(1, 0, 2),
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
  cards: {
    backgroundColor: "#e8e2da",

  },
});
export const divStyle = {
  flex: 1,
  backgroundColor: "white",
  borderRadius: "10px",
  padding: "50px",
  width: "18vw"
}