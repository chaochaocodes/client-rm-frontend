import React, { Component } from "react";
import { api } from '../services/api';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import {Button} from '@material-ui/core/'
import {Link} from 'react-router-dom'
// import { Redirect } from 'react-router-dom';

class Signup extends Component {

    state = {
        username: "",
        password: "",
        pwconfirm: ""
    }

    handleChange = (e) => {
        console.log("name", e.target.name, "value", e.target.value)
        this.setState(
            {[e.target.name]: e.target.value}
        )
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const user = {user: this.state}
        api.auth.signup(user).then(res=>{
            if(!res.error) {
                this.props.onSignup(res);
                this.props.history.push('/dashboard')
            } else {
                this.setState({ error: true });
            }
        })
    }

    render() {
        return ( 
            <Grid container justify="center" >
                <div>
                <h3>Create an Account</h3>
                <form onSubmit={this.handleSubmit} noValidate autoComplete="off">
                    <TextField id="standard-basic" label="Username" name="username"
                        onChange={this.handleChange} value={this.state.username}/><p></p>
                    <TextField id="standard-basic" label="Password" name="password"
                        onChange={this.handleChange} value={this.state.password}/><p></p>
                    <TextField id="standard-basic" label="Confirm Password" name="pwconfirm"
                        onChange={this.handleChange} value={this.state.pwconfirm}/><p></p>
                    <Button variant="outlined" type="submit">Sign Up</Button><p></p>
                    <Button variant="outlined" component={Link} to="/login">Already Have an Account?</Button>
                    </form>
                </div> 
            </Grid> 
            )
    }
}

export default Signup
