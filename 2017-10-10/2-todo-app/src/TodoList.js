import React from 'react';

import TodoItem from './TodoItem';

const className = (filter) =>
  'list' +
    filter === 'all'
      ? ''
      : ' ' + filter; // completed or uncompleted

const TodoList = ({filter, onClick, todos}) => (
  <ul className={className(filter)}>
    {
      todos.map(({id, completed, text}) => (
        <TodoItem key={id} onClick={() => {onClick(id);}} completed={completed} text={text}/>
      ))
    }
  </ul>
);

export default TodoList;
