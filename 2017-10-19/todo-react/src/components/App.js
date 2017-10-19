import React from 'react';
import fetch from 'isomorphic-fetch';

import './App.css';

import Adder from './Adder';
import Filter from './Filter';
import Heading from './Heading';
import Symbols from './Symbols';
import TodoList from './TodoList';

const dataURL = `http://localhost:3003`;

function fetchCheck(response){
if (response.status !== 200) {
  throw new Error(response.status);
}

return response;
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filter: 'all',
      todos: [],
    };
  }

  componentDidMount() {
    fetch(`${dataURL}/todos`)
      .then(fetchCheck)
      .then((response) => response.json())
      .then((todos) => {
        this.setState({
          todos
        });
      });
  }

  render() {
    const {
      filter,
      todos,
    } = this.state;
    return (
      <section className="TodoApp">
        <Symbols/>
        <Heading todos={todos}/>
        <Filter filter={filter}/>
        <TodoList filter={filter} todos={todos}/>
        <Adder/>
      </section>
    );
  }
}

export default App;
