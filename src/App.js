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
    return (
        <div className="App">
          {/* <NavBar currentUser={this.state.auth.user} handleLogout={this.logout}/> */}
          <Switch>
              <Route exact path="/"/>
              <Route path="/index" component = {IndexContainer}/>
              <Route path ="/login" component = {Login}/>
              {/* <Route path="/profile" component={Profile} /> */}
          </Switch>
        </div>
    );
  }
}

export default App;