import React, { Component } from "react";
import Grid from '@material-ui/core/Grid';
import {Link} from 'react-router-dom'
import {Button} from '@material-ui/core/'
// import { api } from '../services/api';

class Account extends Component {
      
    render() {
        return ( 
            <Grid container justify="center" >
                <div>
                    <p> Hello!</p>
                    <p> Delete Account?</p>
                    <Button variant="outlined" onClick={this.props.onDelete} component={Link} to="/delete">Delete Account</Button>
                </div> 
            </Grid>  
            )
    }
}

export default Account
