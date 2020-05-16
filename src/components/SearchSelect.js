import React from 'react'
import { makeStyles, withStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import NativeSelect from '@material-ui/core/NativeSelect';
import InputBase from '@material-ui/core/InputBase';
import {Button} from '@material-ui/core/'
import {Link} from 'react-router-dom'
// import { api } from "../services/api";

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


const SearchSelect = (props) => {
  const classes = useStyles();
  const [state, setState] = React.useState('');
  
  const handleChange = event => {
    setState(event.target.value);
    // pass city value into Search Container..
  };

  const stateArray = [
		"AK", "AL", "AR", "AZ", "CA", "CO", "CT", "DC",  
    "DE", "FL", "GA", "HI", "IA", "ID", "IL", "IN", "KS", "KY", "LA",  
    "MA", "MD", "ME", "MI", "MN", "MO", "MS", "MT", "NC", "ND", "NE",  
    "NH", "NJ", "NM", "NV", "NY", "OH", "OK", "OR", "PA", "RI", "SC",  
    "SD", "TN", "TX", "UT", "VA", "VT", "WA", "WI", "WV", "WY"]

  return (
    <div>
     <h3>Enter City, State to Start Exploring!</h3>
     
      <form onSubmit={ e => props.handleSubmit(e) }>
        <input name="city" label="city" placeholder="Enter City"/>
        <input name="state" label="state" placeholder="Enter State"/>
        <button type="submit"> Search </button>
      </form>

      <form onSubmit={ e => props.handleSubmit(e)} noValidate autoComplete="off">
      <FormControl className={classes.margin}  >
        <InputLabel htmlFor="input-city" >City</InputLabel>
        <BootstrapInput id="city" name="city" label="city"/>
      </FormControl>

      <FormControl className={classes.margin}>
        <InputLabel htmlFor="select-state">State</InputLabel>
        <NativeSelect
          id="select-state"
          value={state}
          onChange={handleChange}
          input={<BootstrapInput />}
        >
          <option aria-label="None" value="" label=" " />
          {stateArray.map(state => <option value={state}>{state}</option> )}
        </NativeSelect>
      </FormControl>
      <Button className={classes.margin}  type="submit" variant="outlined" component={Link} to="/search">Search</Button>
      </form>
    </div>
  );
}

export default SearchSelect;