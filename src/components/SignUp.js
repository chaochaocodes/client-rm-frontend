import React, { Component } from "react";
import Grid from '@material-ui/core/Grid';
import { api } from '../services/api';
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
        api.auth.signup(this.state).then(res=>{
            if(!res.error) {
                this.props.onSignup(res);
                this.props.history.push('/profile')
            } else {
                this.setState({ error: true });
            }
        })
    }

    render() {
        return ( 
            <Grid container justify="center" >
                <div>
                <form onSubmit={this.handleSubmit}>
                    <label>Username</label>
                    <input 
                        type="text" placeholder="Enter Username" name="username" 
                        onChange={this.handleChange} value={this.state.username}/>
                    <label>Password</label>
                    <input 
                        type="password" placeholder="Enter Password" name="password" 
                        onChange={this.handleChange} value={this.state.password}/>
                    <label>Password Confirmation</label>
                    <input 
                        type="password" placeholder="Enter Password Confirmation" name="pwconfirm" 
                        onChange={this.handleChange} value={this.state.pwconfirm}/>
                    <button type="submit">Sign Up</button>
                    </form>
                </div> 
            </Grid> 
            )
    }
}

export default Signup
