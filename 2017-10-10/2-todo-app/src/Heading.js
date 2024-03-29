import React from 'react';

/*
  Replace the callback comment in `filter` method with an arrow function
  whose input argument is `todo`
  whose output value is an expression that is true when the item is uncompleted.
*/

/*
  Rewrite the callback function in `filter` method
  with object destructuring as the input argument instead of `todo`
  and simplify the output value
*/

const uncompleted = (todos) => todos.reduce(
  (un, {completed}) => completed ? un : un + 1,
  0
);
const completed = (todos) => todos.length;

const Heading = ({todos}) => (
  <header>
    <h1>
      <span>Todo list: </span>
      <strong>{`${uncompleted(todos)} uncompleted`}</strong>
      <span>{` / ${completed(todos)} total`}</span>
    </h1>
  </header>
);

export default Heading;
