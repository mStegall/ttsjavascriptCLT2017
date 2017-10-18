import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Redirect, Switch } from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css'

import Login from "./components/login.jsx"
import UserHome from "./components/UserHome.jsx"
import Post from "./components/Post.jsx"

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App container">
          <div>
            <Switch>
              <Route exact path="/" component={Login} />
              <Route exact path="/user/:userName" component={UserHome} />
              <Route exact path="/posts/:postId" component={Post} />
              <Redirect to="/" />
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
