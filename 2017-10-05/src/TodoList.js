import React from 'react';
import classNames from 'classnames'

/*
  1. In the `li` element, add a `className` prop whose value is
     * 'completed' if todo.completed is true
     * 'uncompleted' if todo.completed is false
  2. Replace `props` with destructured object for filter and todos properties.
  3. Replaces `todo` with destructured object for completed, id, text properties.

  4. Replace `li` element with TodoItem component:
     * Copy relevant code from this file to TodoItem.js file.
     * Add import statement to this file for TodoItem component.
     * In `map` callback function, return TodoItem element with its 3 props.
*/

const TodoList = (props) => (
  <ul className={classnames({
    list: true,
    completed: props.filter === 'completed',
    uncompleted: props.filter === 'uncompleted',
  })}>
    {
      props.todos.map((todo) => (
        <li key={todo.id}>
          {todo.text}
        </li>
      ))
    }
  </ul>
);

export default TodoList;
