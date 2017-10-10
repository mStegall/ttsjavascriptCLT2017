import React from 'react';
import fetch from 'isomorphic-fetch';

import './App.css';

import Adder from './Adder';
import Filter from './Filter';
import Heading from './Heading';
import Symbols from './Symbols';
import TodoList from './TodoList';

import {
  addTodo,
  changeFilter,
  toggleTodo,
} from './logic';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filter: 'all',
      todos: [],
    };
    this._addTodo = this._addTodo.bind(this);
    this._changeFilter = this._changeFilter.bind(this);
    this._toggleTodo = this._toggleTodo.bind(this);
  }

  _addTodo(text) {
    this.setState((statePrev) => addTodo(statePrev, text));
  }

  _changeFilter(filter) {
    this.setState((statePrev) => changeFilter(statePrev, filter));
  }

  _toggleTodo(id) {
    this.setState((statePrev) => toggleTodo(statePrev, id));
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
        <Filter filter={filter} onChange={this._changeFilter}/>
        <TodoList filter={filter} onClick={this._toggleTodo} todos={todos}/>
        <Adder onSubmit={this._addTodo}/>
      </section>
    );
  }
}

export default App;
