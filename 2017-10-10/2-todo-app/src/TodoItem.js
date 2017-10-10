import React from 'react';

const TodoItem = ({completed, onClick, text}) => (
  <li className={completed ? 'completed' : 'uncompleted'} onClick={onClick}>
    {text}
  </li>
);

export default TodoItem;
