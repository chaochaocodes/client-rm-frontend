import React, { Component } from 'react';
import './css/App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import IndexContainer from './containers/IndexContainer';
import NavBar from './components/NavBar'
import SignUp from './components/SignUp';
import Login from './components/Login';
import Logout from './components/Logout';
import Delete from './components/Delete';
import Home from './components/Home'; 
import Account from './components/Account'; 
import Dashboard from './components/Dashboard'; 
import Tracker from './components/Tracker'; 
import About from './components/About'; 
import { api } from "./services/api";
// import { Redirect } from 'react-router-dom';

class App extends Component {
  state = {
    auth: {
      user: {}
      // logged in boolean
    }
  }

  componentDidMount(){
    const token = localStorage.getItem("token");
    if(token) {
      api.auth.getCurrentUser().then(user => {
        const updatedState = { ...this.state.auth, user: user };
        this.setState({auth: updatedState})
      })
    }
  }

//  SAMPLE REQUEST
//   fetch('http://localhost:3000/api/v1/Dashboard', {
//   method: 'GET',
//   headers: {
//     Authorization: `Bearer <token>`
//   }
// })

  signup = data => {
    console.log("Signup", data )
    const updatedState = {...this.state.auth, 
      user: {id: data.id, username: data.username}};
    localStorage.setItem("token", data.jwt);
    this.setState({auth: updatedState});
  }

  login = data => {
    const updatedState = {...this.state.auth, 
      user: {id: data.id, username: data.username}};
    localStorage.setItem("token", data.jwt);
    this.setState({auth: updatedState});
  };
  
  logout = () => {
    console.log("token", "logging out!")
    localStorage.removeItem("token");
    this.setState({ auth: { user: {} } })
  }

  handleDelete = () => {
    console.log( "app.js handle delete")
    api.auth.deleteAccount();
}

  render() {
    console.log("App Component rendered")
    return (
        <div className="App">
          <Router>
          <NavBar 
            loggedIn={this.state.loggedIn}
            currentUser={this.state.auth.user} 
            onLogout={this.logout}/>
            <Switch>
                <Route exact path="/"><Home/></Route>
                <Route path="/index" component={IndexContainer} /> 
                <Route path="/signup" render={props => <SignUp {...props} onSignup={this.signup}/>}></Route>  
                <Route path="/login" render={props => <Login {...props} onLogin={this.login}/>}></Route>  
                <Route path="/logout" ><Logout/></Route>  
                <Route path="/account" render={props => <Account {...props} onDelete={this.handleDelete}/>}></Route> 
                <Route path="/dashboard"><Dashboard/></Route>
                <Route path="/delete"><Delete/></Route>
                <Route path="/tracker"><Tracker/></Route>
                <Route path='/about'><About/></Route>
            </Switch>
          </Router>
        </div>
    );
  }
}

export default App;