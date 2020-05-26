export const donationCardStyles = theme => ({
  paper: {
    marginTop: theme.spacing(0),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  submit: {
    margin: theme.spacing(3, 2, 2),
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
  submit3: {
    margin: theme.spacing(3, 1, 2),
    backgroundColor: "#6291b0",
    '&:hover':{
      backgroundColor: "#173549",
      color: '#FFF'
} 
  },
});
export const divStyle = {
  flex: 1,
  backgroundColor: "white",
  borderRadius: "10px",
  padding: "50px",
  width: "18vw"
  
}