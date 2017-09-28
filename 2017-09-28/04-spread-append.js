// Given the previous state and the text to add,
// return the next state.
const addTodo = (todos, text) => [...todos, {
  text: text,
  completed: false,
}];

const todos0 = [];
const todos1 = addTodo(todos0, 'Write less, do more');
const todos2 = addTodo(todos1, 'Repeat generic patterns');
const todos3 = addTodo(todos2, 'See specific details');

console.log(todos0.length, todos1.length, todos2.length, todos3.length);
console.log(todos3);
