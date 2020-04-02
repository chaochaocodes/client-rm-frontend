import React, { Component } from "react";
import { api } from '../services/api';
import { Redirect } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import {Button} from '@material-ui/core/'
import {Link} from 'react-router-dom'

class Login extends Component {

    state = {
        username: "",
        password: ""
    }

    handleChange = (e) => {
        this.setState(
            {[e.target.name]: e.target.value}
        )
    }

    handleSubmit = (e) => {
        e.preventDefault();
        api.auth.login(this.state).then(res=>{
            if(!res.error) {
                this.props.onLogin(res);
                this.props.history.push('/dashboard')
            } else {
                this.setState({ error: true });
            }
        })
        // this.props.loginUser(this.state.username, this.state.password)
        // this.setState({username: "", password: ""}) //reset form 
    }
    
    render() {

        return this.props.loggedIn? (
            <Redirect to="/dashboard"/>
            ) : ( 
                
            <Grid container justify="center" >
                <div>
                <h3>Login</h3>
                <form onSubmit={this.handleSubmit} noValidate autoComplete="on">
                    {/* <Message error header={this.props.failedLogin? this.props.error : null}/> */}
                    <TextField id="login-username" label="Username" name="username"
                        onChange={this.handleChange} value={this.state.username}/><p></p>
                    <TextField id="login-password" label="Password" name="password" type="password"
                        onChange={this.handleChange} value={this.state.password}/><p></p>
                    <Button variant="outlined" type="submit">Login</Button><p></p>
                    <Button variant="outlined" component={Link} to="/signup">New User?</Button>
                </form>  
                </div>
            </Grid> 
            )
    }
}

export default Login
