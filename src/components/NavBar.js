import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import {Button, IconButton} from '@material-ui/core/'
import {Link} from 'react-router-dom'
import 'typeface-roboto';
// import { api } from "./services/api";
// import {NavLink} from 'react-router-dom'

const NavBar = (props) => {
    return(
        <div>
          <AppBar position="fixed" color="primary">
            <Toolbar>
              {/* <Typography variant="h6">Client-RM</Typography> */}
              <Button size="large" color="inherit" component={Link} to="/">Client-RM</Button>
              {/* <Button color="inherit" for="radioHL" component={Link} to="/">{props.loggedIn ? "Home" : "Login"}</Button> */}
              <Button color="inherit" component={Link} to="/index">Listings</Button>
              <Button color="inherit" component={Link} to="/signup">Sign Up</Button>
              <Button color="inherit" component={Link} to="/login">Login</Button>
              <Button color="inherit" component={Link} to="/logout">Logout</Button>
              <Button color="inherit" component={Link} to="/tracker">Tracker</Button>
              <Button color="inherit" component={Link} to="/about">About</Button>
              <Button color="inherit" component={Link} to="/profile">{props.loggedIn ? "Profile" : "Hi, User"}</Button>
            </Toolbar>
          </AppBar>
        </div>
    )
}
export default NavBar;