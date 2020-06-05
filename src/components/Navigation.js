import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar'
import {Button} from '@material-ui/core/'
import {Link} from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import 'typeface-roboto';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

const Navigation = () => {
  const classes = useStyles();

  return(
        <div className={classes.root}>
          <AppBar position="fixed" color="primary">
            <Toolbar variant="regular">
              <Button color="inherit" component={Link} to="/about">About</Button>
              <Button color="inherit" component={Link} to="/index">Listings</Button>
              <Button color="inherit" component={Link} to="/save">Saved</Button>
              <Button color="inherit" component={Link} to="/tracker">Tracker</Button>    
              <Button color="inherit" component={Link} to="/dashboard">Dashboard</Button>
              <Button color="inherit" component={Link} to="/account">Account</Button>
            </Toolbar>
          </AppBar>
        </div>
    )
}
export default Navigation;