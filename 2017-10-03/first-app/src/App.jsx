import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import classNames from "classnames"

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      firstName: "Matt",
      lastName: "Stegall",
      age: 19,
      formalSetting: true,
      friends: [
        {
          name: "Brad",
          years: 7
        }, {
          name: "Bobby",
          years: 9
        }
      ]
    }
  }

  render() {
    const { firstName, lastName, age, formalSetting, friends } = this.state;
    const canDrink = age >= 21
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          My name is {firstName}{formalSetting && " " + lastName}
          <br />
        </p>
        <ul>
          <li className={classNames("bold", {
            red: age < 18,
            yellow: !canDrink && age >= 18,
            green: canDrink
          })}>I {canDrink ? "can" : "can't"} drink legally</li>
          <li>I {age >= 16 ? "can" : "can't"} drive legally</li>
          {age >= 21 && <li style={{
            color: "red",
            textDecoration: "underline",
            fontSize: "30px",
          }}>GET AN UBER</li>}
        </ul>
        <h3>Friends:</h3>
        <ul>
          {friends.filter(friend => friend.years > 8).map(friend => <li key={friend.name}>{friend.name} and I have been friends for {friend.years} years</li>)}
        </ul>
      </div>
    );
  }
}

export default App;
