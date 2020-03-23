import React, { Component } from "react";
import Grid from '@material-ui/core/Grid';
import { api } from '../services/api';

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
                this.props.history.push('/')
            } else {
                this.setState({ error: true });
            }
        })
        // this.props.loginUser(this.state.username, this.state.password)
        // this.setState({username: "", password: ""}) //reset form 
    }

    render() {
        return this.props.loggedIn? (
            <Redirect to="/profile"/>
            ) : ( 
            <Grid container justify="center" >
              <div className="login form">
                <form onSubmit={this.handleSubmit}>
                    {/* <Message error header={this.props.failedLogin? this.props.error : null}/> */}
                    <label>Username</label>
                    <input 
                        type="text" placeholder="Enter Username" name="username" 
                        onChange={this.handleChange} value={this.state.username}/>
                    <label>Password</label>
                    <input 
                        type="password" placeholder="Enter Password" name="password" 
                        onChange={this.handleChange} value={this.state.password}/>
                    <button type="submit">Login</button>
                </form>  
              </div>
            </Grid> 
            )
    }
}

export default Login