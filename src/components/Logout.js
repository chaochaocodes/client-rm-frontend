import React, { Component } from "react";
import Grid from '@material-ui/core/Grid';
import {Link} from 'react-router-dom'
import {Button} from '@material-ui/core/'
// import { api } from '../services/api';

class Logout extends Component {

    render() {
        return ( 
            <Grid container justify="center" >
                <div>
                    <p> Successfully Logged Out</p>
                    <Button color="inherit" component={Link} to="/">Return Home</Button>
                </div> 
            </Grid>  
            )
    }
}

export default Logout
