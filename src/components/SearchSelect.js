import React from 'react'
import { makeStyles, withStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import NativeSelect from '@material-ui/core/NativeSelect';
import InputBase from '@material-ui/core/InputBase';
import {Button} from '@material-ui/core/'
import { api } from "../services/api";

const BootstrapInput = withStyles(theme => ({
  root: {
    'label + &': {
      marginTop: theme.spacing(3),
    },
  },
  input: {
    borderRadius: 4,
    position: 'relative',
    backgroundColor: theme.palette.background.paper,
    border: '1px solid #ced4da',
    fontSize: 16,
    padding: '10px 26px 10px 12px',
    transition: theme.transitions.create(['border-color', 'box-shadow']),
    // Use the system font instead of the default Roboto font.
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    '&:focus': {
      borderRadius: 4,
      borderColor: '#80bdff',
      boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
    },
  },
}))(InputBase);

const useStyles = makeStyles(theme => ({
  margin: {
    margin: theme.spacing(1),
  },
}));


function SearchSelect() {
  const classes = useStyles();
  const [age, setAge] = React.useState('');
  const handleChange = event => {
    setAge(event.target.value);
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    api.listings.searchListings({search: {city: e.target.city.value, state: e.target.state.value}})
  };

  return (
    <div>
     <h3>Enter City, State to Start Exploring!</h3>
      <form onSubmit={handleSubmit}>
        <input name="city" label="city" placeholder="Enter City"/>
        <input name="state" label="state" placeholder="Enter State"/>
        <button value="submit"> Search </button>
      </form>

      <FormControl className={classes.margin} name="city" label="city" placeholder="Enter City">
        <InputLabel htmlFor="demo-customized-textbox" >City</InputLabel>
        <BootstrapInput id="demo-customized-textbox" label="Enter City"/>
      </FormControl>

      <FormControl className={classes.margin} name="state" label="state" placeholder="Enter State">
        <InputLabel htmlFor="demo-customized-textbox" >State</InputLabel>
        <BootstrapInput id="demo-customized-textbox" />
      </FormControl>

      <FormControl className={classes.margin}>
        <InputLabel htmlFor="demo-customized-select-native">City</InputLabel>
        <NativeSelect
          id="demo-customized-select-native"
          // value={age}
          onChange={handleChange}
          input={<BootstrapInput />}
        >
          <option aria-label="None" value="" label="Search by City" />
          <option value={10}>New York City, NY</option>
          <option value={20}>San Francisco, CA</option>
          <option value={30}>Seattle, WA</option>
          <option value={30}>Denver, CO</option>
          <option value={30}>Chicago, IL</option>
        </NativeSelect>
      </FormControl>
    </div>
  );
}

export default SearchSelect