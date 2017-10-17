import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { BrowserRouter as Router, Route, Link, Redirect, Switch } from "react-router-dom"

const Home = () => (
  <div>
    <h1>Welcome Home</h1>
    <p>Here's our super awesome routing app!</p>
  </div>
)

const PageOne = () => (<div>
  <h1>Welcome to Page One!</h1>
  <p>Here's some text</p>
</div>)

const PageTwo = () => <h1>Welcome to Page Two!</h1>

const User = ({ userName }) => <p>His name is {userName}!!!</p>
const UserPet = ({ match, history }) => [
  <p>His name is {match.params.userName}!!!</p>,
  <p> His pet is {match.params.petName}</p>,
  <button onClick={() => history.goBack()}>Back</button>
]

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <Link to="/">
              <img src={logo} className="App-logo" alt="logo" />
            </Link>
            <h1 className="App-title">Welcome to React</h1>
          </header>
          <div>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/page1">Page One</Link></li>
              <li><Link to="/page2">Page Two</Link></li>
              <li><Link to="/user/Bobby/Sport">Bobby and Sport</Link></li>
            </ul>
            {/* <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/page1" component={PageOne} />
              <Route path="/page2" component={PageTwo} />
              <Route path="/:userName" render={({ match }) => <User userName={match.params.userName} />} />
              <Redirect to="/" />
            </Switch> */}

            <Route exact path="/" component={Home} />
              <Route path="/page1" component={PageOne} />
              <Route path="/page2" component={PageTwo} />
            <Route exact path="/user/:userName" render={({ match }) => <Redirect to={`/user2/${match.params.userName}`} />} />
            <Route exact path="/user2/:userName" render={({ match }) => <User userName={match.params.userName} />} />
            <Route path="/user/:userName/:petName" component={UserPet} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
