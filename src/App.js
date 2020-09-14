import React, { Component } from 'react';
import './css/App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import IndexContainer from './containers/IndexContainer';
import SearchContainer from './containers/SearchContainer';
import SaveContainer from './containers/SaveContainer';
import NavBar from './components/NavBar'
import Navigation from './components/Navigation'
import SignUp from './components/SignUp';
import Login from './components/Login';
import Logout from './components/Logout';
import Delete from './components/Delete';
import Home from './components/Home'; 
import Dashboard from './components/Dashboard'; 
import Tracker from './components/Tracker'; 
import About from './components/About'; 
import { api } from "./services/api";
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import AccountContainer from './containers/AccountContainer';

const theme = createMuiTheme({
    palette: {
      primary: {
        main: '#455a64',
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
    localStorage.setItem("token", data.jwt);
    this.setState({
      loggedIn: true,
      auth: {
        user: {
          id: data.user.id,
          username: data.user.username
        }
      }
    })
  }

  login = data => {
    console.log("login func")
    console.log(data)
    localStorage.setItem("token", data.jwt);
    this.setState({
      loggedIn: true,
      auth: {
        user: {
          id: data.user.id,
          username: data.user.username
        }
      }
    })
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
    api.listings.saveListing({listing: result, user_id: this.state.auth.user.id})
  };

  handleDelete = (result) => {
    console.log("delete fires", result)
    api.listings.deleteListing({listing: result, user_id: this.state.auth.user.id})
  }

  render() {
    console.log("App Component rendered")
    console.log(this.state.auth.user)
    return (
        <div className="App">
          <ThemeProvider theme={theme} >
          <Router>

          <header className="app-header">
            <div class="nav-container">
              <NavBar class="navbar"
                loggedIn={this.state.loggedIn}
                currentUser={this.state.auth.user} 
                onLogout={this.logout}/>
              <Navigation class="navigation"/>
            </div>
          </header>
            
          <main id="main" className="app-main" tabindex="-1">

            <Switch>
                <Route exact path="/"><Home/></Route>
                <Route path="/index" render={props => <IndexContainer {...props} handleSave={this.handleSave}/>}></Route>
                <Route path="/search" render={props => <SearchContainer {...props} handleSave={this.handleSave}/>}></Route>
                <Route path="/save" render={props => <SaveContainer {...props} handleDelete={this.handleDelete} currentUser={this.state.auth.user} />}></Route>
                <Route path="/signup" render={props => <SignUp {...props} onSignup={this.signup}/>}></Route>  
                <Route path="/login" render={props => <Login {...props} onLogin={this.login}/>}></Route>  
                <Route path="/logout" ><Logout/></Route>  
                <Route path="/account" render={props => <AccountContainer {...props} onDelete={this.delete} currentUser={this.state.auth.user} />}></Route> 
                <Route path="/tracker"><Tracker/></Route>
                <Route path="/dashboard"><Dashboard/></Route>
                <Route path="/delete"><Delete/></Route>
                <Route path='/about'><About/></Route>
            </Switch>

          </main>
          </Router>
          </ThemeProvider>
        </div>
    );
  }
}

export default App;