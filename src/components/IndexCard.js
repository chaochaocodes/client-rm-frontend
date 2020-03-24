import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
// import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const useStyles = makeStyles(theme => ({
  root: {
    width: 250,
    minHeight: 310,
    opacity: 1,
  }, 
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
    // backgroundColor: '#000000',
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
}));

const IndexCard = props => {

  const {result} = props
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const newTab = () => { 
    window.open( 
        result.rdc_web_url, "_blank"); 
    } 

  return (

    <Card className={classes.root}>
      <CardMedia
        className={classes.media}
        image={result.photo}
        title="Home"
      />
      <CardHeader
        title={result.price}  
        subheader={result.address}
      />
      {/* <CardContent>
        <Typography variant="body2" component="p">
          <strong>BREACH DATE: </strong>{result.breach_date}
        </Typography>
      </CardContent> */}
      <CardActions disableSpacing>
        <Button size="small" onClick={newTab}>Info</Button>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}>
            {/* <ExpandMoreIcon /> */}
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent >
          <Typography paragraph>{result.beds} Bed | {result.baths} Bath | {result.sqft} Sqft</Typography>
          <Typography paragraph>Property Type: {result.prop_type}</Typography> 
          <Typography paragraph>Location: {result.city_state}</Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}

export default IndexCard