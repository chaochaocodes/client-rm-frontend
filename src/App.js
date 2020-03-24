import React, { Component } from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import IndexContainer from './containers/IndexContainer';
import NavBar from './components/NavBar'
import Login from './components/Login';
import Home from './components/Home'; 
import Profile from './components/Profile'; 
import Tracker from './components/Tracker'; 
import About from './components/About'; 
import { api } from "./services/api";


class App extends Component {
  state = {
    auth: {
      user: {}
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
//   fetch('http://localhost:3000/api/v1/profile', {
//   method: 'GET',
//   headers: {
//     Authorization: `Bearer <token>`
//   }
// })

  login = data => {
    console.log(data)
    const updatedState = {...this.state.auth, 
      user: {id: data.id, username: data.username}};
    localStorage.setItem("token", data.jwt);
    this.setState({auth: updatedState});
  };
  
  logout = () => {
    localStorage.removeItem("token");
    this.setState({ auth: { user: {} } })
  }
  

  render() {
    console.log("App Component")
    return (
        <div className="App">
          <Router>
          <NavBar loggedIn={this.state.loggedIn}/> {/* currentUser={this.state.auth.user} handleLogout={this.logout} */}
            <Switch>
                <Route exact path="/"><Home/></Route>
                <Route path="/index" component={IndexContainer} /> 
                <Route path ="/login" ><Login/></Route>  
                {/* render={props => <Login {...props} onLogin={this.login}/>} */}
                <Route path="/profile"><Profile/></Route>
                <Route path="/tracker"><Tracker/></Route>
                <Route path ='/about'><About/></Route>
            </Switch>
          </Router>
        </div>
    );
  }
}

export default App;