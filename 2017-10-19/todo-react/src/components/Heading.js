import React from 'react';

// Given todos, return the count of whose completed property is falue.
const uncompleted = (todos) => todos.reduce(
  (un, {completed}) => completed ? un : un + 1,
  0
);

// Given todos, return the total count.
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
