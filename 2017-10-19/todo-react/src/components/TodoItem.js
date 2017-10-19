import React from 'react';

const TodoItem = ({completed, text}) => (
  <li className={completed ? 'completed' : 'uncompleted'}>
    <svg>
      <use xlinkHref={`#${completed ? 'completed' : 'uncompleted'}`} />
    </svg>
    <div>
      {text}
    </div>
  </li>
);

export default TodoItem;
