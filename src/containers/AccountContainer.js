import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import {Link} from 'react-router-dom'
import {Button} from '@material-ui/core/'

class AccountContainer extends Component {

    state = {
        listing: []
    }

    render() {
        return(
            <Grid container justify="center" >                
                <div justify="center">
                    <div className="account-details">
                    <h3>Account Details</h3><br/>
                    <p> Hello {this.props.currentUser.username}!</p>
                    <br/>
                    <Button variant="outlined" onClick={this.props.onDelete} component={Link} to="/delete">Delete Account</Button>
                    <p>Note: This cannot be undone!</p>
                    </div>
                </div> 
            </Grid>
        )
    }
}

export default AccountContainer;
