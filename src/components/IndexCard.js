import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import PlaceholderPhoto from '../images/national_association_of_realtors_logo.png';
// Material UI Modal
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
// import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

// const theme = createMuiTheme({
//   palette: {
//     primary: {
//       main: '#00897b',
//     },
//   },
// });

const useStyles = makeStyles(theme => ({
  root: {
    width: 300,
    minHeight: 310,
    opacity: 1,
  }, 
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '0px solid #000',
    boxShadow: theme.shadows[2],
    padding: theme.spacing(2, 4, 0),
  },
  margin: {
    margin: theme.spacing(1),
  },
}));

const IndexCard = props => {
  const {result} = props
  const classes = useStyles();

  const newTab = () => { 
    window.open(result.rdc_web_url, "_blank"); 
  } 

  // Modal 
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  }; 
  // Modal 

  return (
    <>
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <img alt="" src={result.photo ? result.photo : PlaceholderPhoto} />
            <h4 id="transition-modal-title">{result.address}</h4>
            <p id="transition-modal-description">
            <p>{result.beds} Bed | {result.baths} Bath | {result.sqft}</p>
            <p>Price: {result.price}</p> 
            <p>Property Type: {result.prop_type}</p> 
            <p>Location: {result.city_state}</p>
            <Button variant="outlined" size="small" className={classes.margin} onClick={newTab}>Link</Button>
            
            { props.container == "save container" ? 
            <Button variant="outlined" size="small" className={classes.margin}> Delete </Button> 
            :
            <Button variant="outlined" size="small" className={classes.margin} onClick={ () => props.handleSave({result})}>Save Listing</Button>
            }

            </p>
          </div>
        </Fade>
      </Modal>
    </div>



    <Card className={classes.root}>
      <CardMedia
        className={classes.media}
        image={result.photo ? result.photo : PlaceholderPhoto}
        title="Home"
      />
      <CardContent>
        <Typography variant="h6" component="p"> {result.price} </Typography>
        <Typography variant="body2" component="p"> {result.address}
        <p><strong>{result.beds}</strong> Bed | <strong>{result.baths}</strong> Bath | {result.sqft}</p>
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <Button size="small" onClick={newTab}>Link</Button>
        <Button size="small" onClick={handleOpen}>Details</Button>
      </CardActions> 
    </Card>
    </>
  );
}

export default IndexCard;