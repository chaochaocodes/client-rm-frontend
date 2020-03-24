import React, { Component } from "react";
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/Typography';
import Link from '@material-ui/core/Typography';
// import { makeStyles } from '@material-ui/core/styles';
import { api } from '../services/api';
import { Redirect } from 'react-router-dom';

// const useStyles = makeStyles((theme) => ({
//     root: {
//       height: '100vh',
//     },
//     image: {
//       backgroundImage: 'url(https://source.unsplash.com/random)',
//       backgroundRepeat: 'no-repeat',
//       backgroundColor:
//         theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
//       backgroundSize: 'cover',
//       backgroundPosition: 'center',
//     },
//     paper: {
//       margin: theme.spacing(8, 4),
//       display: 'flex',
//       flexDirection: 'column',
//       alignItems: 'center',
//     },
//     form: {
//       width: '100%',
//       marginTop: theme.spacing(1),
//     },
//     submit: {
//       margin: theme.spacing(3, 0, 2),
//     },
//   }));

// const classes = () => {useStyles()};

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
                this.props.history.push('/profile')
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
              {/* <div className={classes.paper}>
                <Typography component="h1" variant="h5"> Sign in </Typography>
                <form className={classes.form} noValidate>
                    <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    id="email" */}
                    {/* // label="Email Address"
                    // name="email"
                    // autoComplete="email"
                    // autoFocus
                    // onChange={this.handleChange} value={this.state.username}
                    // />
                    // <TextField */}
                    {/* // variant="outlined"
                    // margin="normal"
                    // required
                    // fullWidth
                    // name="password"
                    // label="Password"
                    // type="password"
                    // id="password"
                    // autoComplete="current-password"
                    // onChange={this.handleChange} value={this.state.password}
                    // />
                    // <Button */}
                    {/* // type="submit"
                    // fullWidth
                    // variant="contained"
                    // color="primary"
                    // className={classes.submit}
                    // >
                    // Sign In
                    // </Button>
                    // <Grid container>
                    //     <Grid item xs>
                    //         <Link href="#" variant="body2">
                    //         Forgot password?
                    //         </Link>
                    //     </Grid>
                    // </Grid>
                    // <Grid item>
                    //     <Link href="#" variant="body2">
                    //     {"Don't have an account? Sign Up"}
                    //     </Link>
                    // </Grid>
                </form> */}
              {/* </div> */}
            </Grid> 
            )
    }
}

export default Login
