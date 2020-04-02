import React, { Component } from 'react';
import './css/App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import IndexContainer from './containers/IndexContainer';
import SearchContainer from './containers/SearchContainer';
import NavBar from './components/NavBar'
import SignUp from './components/SignUp';
import Login from './components/Login';
import Logout from './components/Logout';
import Delete from './components/Delete';
import Home from './components/Home'; 
import Dashboard from './components/Dashboard'; 
import About from './components/About'; 
import { api } from "./services/api";
// import { Redirect } from 'react-router-dom';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import AccountContainer from './containers/AccountContainer';

const theme = createMuiTheme({
    palette: {
      primary: {
        main: '#00897b',
      },
    },
});

class App extends Component {
  state = {
    loggedIn: false,
    auth: {
      user: {}
    }
  }

  componentDidMount(){
    const token = localStorage.getItem("token");
    if(token) {
      api.auth.getCurrentUser().then(user => {
        const updatedState = { ...this.state.auth, user: user };
        this.setState({loggedIn: true, auth: updatedState})
      })
    }
  }

  signup = data => {
    console.log("Signup", data )
    const updatedState = {...this.state.auth, 
      user: {id: data.id, username: data.username}};
    localStorage.setItem("token", data.jwt);
    this.setState({loggedIn: true, auth: updatedState});
  }

  login = data => {
    const updatedState = {...this.state.auth, 
      user: {id: data.id, username: data.username}};
    localStorage.setItem("token", data.jwt);
    this.setState({loggedIn: true, auth: updatedState});
  };
  
  logout = () => {
    console.log("token", "logging out!")
    localStorage.removeItem("token");
    this.setState({ loggedIn: false, auth: { user: {} } })
  }

  delete = () => {
    console.log(this.state.auth.user, "Handle delete")
    console.log( "app.js handle delete")
    api.auth.deleteAccount(this.state.auth.user)
    .then(this.logout());
}

  handleSave = (result) => {
    console.log("save fires")
    api.listings.saveListing({listing: result, user_id: this.state.auth.user.id}) // {user id, listing data object}
    // .then(res => res.json())
    // .then(res => {this.setState({listing: res})})
  };

  render() {
    console.log("App Component rendered")
    return (
        <div className="App">
          <ThemeProvider theme={theme} >
          <Router>
          <NavBar 
            loggedIn={this.state.loggedIn}
            currentUser={this.state.auth.user} 
            onLogout={this.logout}/>
            <Switch>
                <Route exact path="/"><Home/></Route>
                <Route path="/index" render={props => <IndexContainer {...props} handleSave={this.handleSave}/>}></Route>
                <Route path="/search" render={props => <SearchContainer {...props} handleSave={this.handleSave}/>}></Route>
                <Route path="/signup" render={props => <SignUp {...props} onSignup={this.signup}/>}></Route>  
                <Route path="/login" render={props => <Login {...props} onLogin={this.login}/>}></Route>  
                <Route path="/logout" ><Logout/></Route>  
                <Route path="/account" render={props => <AccountContainer {...props} onDelete={this.delete} currentUser={this.state.auth.user} />}></Route> 
                <Route path="/dashboard"><Dashboard/></Route>
                <Route path="/delete"><Delete/></Route>
                <Route path='/about'><About/></Route>
            </Switch>
          </Router>
          </ThemeProvider>
        </div>
    );
  }
}

export default App;