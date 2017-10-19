import React from 'react';

import TodoItem from './TodoItem';

// Given filter and todos, return an array of items which match the filter.
const todosFiltered = (filter, todos) => filter === 'all'
  ? todos
  : todos.filter(({completed}) => filter === 'completed'
    ? completed
    : !completed
  );

const TodoList = ({filter, todos}) => (
  <ul className="list">
    {
      todosFiltered(filter, todos).map(({completed, id, text}) => (
        <TodoItem key={id} completed={completed} text={text}/>
      ))
    }
  </ul>
);

export default TodoList;
