import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar'
import {Button} from '@material-ui/core/'
import {Link} from 'react-router-dom'
import 'typeface-roboto';

const NavBar = (props) => {
  console.log(props)

function handleLogout() {
  props.onLogout();
}

const loggedinBtns = ()=> {
  return (
    <div>
    <Button color="inherit" component={Link} to="/account">Account</Button>
    <Button color="inherit" component={Link} to="/dashboard">Dashboard</Button>
    <Button color="inherit" onClick={handleLogout} component={Link} to="/logout">Logout</Button>
    </div>
  )
}

const loggedoutBtns = () => {
  return(
    <div>
      <Button color="inherit" component={Link} to="/signup">Sign Up</Button>
      <Button color="inherit" component={Link} to="/login">Login</Button>
      {/* <Button for="radioHL" component={Link} to="/">{props.loggedIn ? "Home" : "Login"}</Button> */}
    </div>
  )
}

  return(
        <div>
          <AppBar position="fixed" color="primary">
            <Toolbar>
              <Button size="large" color="inherit" component={Link} to="/">Client-RM</Button>
              <Button color="inherit" component={Link} to="/about">About</Button>
              <Button color="inherit" component={Link} to="/index">Listings</Button>
              { props.loggedIn ? loggedinBtns() : loggedoutBtns() }
            </Toolbar>
          </AppBar>
        </div>
    )
}
export default NavBar;

// Select: Dashboard, Account, Tracker
// <FormControl className={classes.margin}>
// <InputLabel id="demo-customized-select-label">Age</InputLabel>
// <Select
//   labelId="demo-customized-select-label"
//   id="demo-customized-select"
//   value={age}
//   onChange={handleChange}
//   input={<BootstrapInput />}
// >
//   <MenuItem value="">
//     <em>None</em>
//   </MenuItem>
//   <MenuItem value={10}>Ten</MenuItem>
//   <MenuItem value={20}>Twenty</MenuItem>
//   <MenuItem value={30}>Thirty</MenuItem>
// </Select>
// </FormControl>