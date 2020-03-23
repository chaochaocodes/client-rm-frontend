import React, { Component } from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import IndexContainer from './containers/IndexContainer';
import Login from './containers/Login';

class App extends Component {
  // state = {
  //   auth: {
  //     user: {}
  //   }
  // }

  // componentDidMount(){
  //   const token = localStorage.getItem("token");
  //   if(token) {
  //     api.auth.getCurrentUser().then(user => {
  //       const updatedState = { ...this.state.auth, user: user };
  //       this.setState({auth: updatedState})
  //     })
  //   }
  // }

  // login = data => {
  //   const updatedState = {...this.state.auth, user: {id: data.id, username: data.username}};
  //   localStorage.setItem("token", data.jwt);
  //   this.setState({auth: updatedState});
  // };
  
  // logout = () => {
  //   localStorage.removeItem("toekn");
  //   this.setState({ auth: { user: {} } })
  // }
  

  render() {
    console.log("App Component")
    return (
        <div className="App">
          {/* <NavBar currentUser={this.state.auth.user} handleLogout={this.logout}/> */}
          <Router>
            <Switch>
                <Route exact path="/"/>
                <Route exact path="/index"> 
                  <IndexContainer/> 
                </Route>
                <Route exact path ="/login">
                  <Login/>
                </Route>
                {/* <Route path="/profile" component={Profile} /> */}
            </Switch>
          </Router>
        </div>
    );
  }
}

export default App;