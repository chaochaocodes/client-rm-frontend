// landing page! :  login / signup / about
import '../css/home.css';
import React from "react";
import Grid from '@material-ui/core/Grid';
import {Link} from 'react-router-dom'
import {Button} from '@material-ui/core/'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    margin: {
      margin: theme.spacing(1),
    },
    extendedIcon: {
      marginRight: theme.spacing(1),
    },
  }));

function Home() {
    const classes = useStyles();
    return ( 
    //   <div className='Home-component'>
        <Grid container justify="center" >
            <div>
                <Button variant="outlined" className={classes.margin} component={Link} to="/login">Login</Button>
                <Button variant="outlined" className={classes.margin} component={Link} to="/signup">Signup</Button>
                <Button variant="outlined" className={classes.margin} component={Link} to="/about">About</Button>
            </div> 
        </Grid> 
    //  </div>
    )
}

export default Home
