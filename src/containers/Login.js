import React, { Component } from "react";
import Grid from '@material-ui/core/Grid';

class Login extends Component {

    state = {
        username: "",
        password: ""
    }

    handleChange = (e) => {
        this.setState({
            username: e.target.value,
            password: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.logUserIn(this.state.username)
    }

    render() {
        return(
            <Grid container justify="center" >
                <div className="Login">
                <form onSubmit={this.handleSubmit}>
                    <label><h2>LOGIN</h2></label>
                    <input type="text" placeholder="Enter Username" name="uname" onChange={(e) => this.handleChange(e)}/>
                    <input type="text" placeholder="Enter Password" name="pw" onChange={(e) => this.handleChange(e)}/>
                    <button type="submit">Login</button>
                </form>
                </div>
            </Grid>
        )
    }
}

export default Login