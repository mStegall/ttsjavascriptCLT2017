// Given previous state and id of item to toggle,
// return next state.
const toggleTodo = (todos, id) => {
  const index = todos.findIndex(todo => todo.id === id);
  return index === -1
    ? todos
    : [
        ...todos.slice(0, index),
        Object.assign({}, todos[index], {
          completed: !todos[index].completed,
        }),
        ...todos.slice(index + 1),
      ];
};

const todosPrev = [
  {
    id: 0,
    text: 'Write less, do more',
    completed: true,
  },
  {
    id: 1,
    text: 'Repeat generic patterns',
    completed: false,
  },
  {
    id: 2,
    text: 'See specific details',
    completed: false,
  },
];
const todosNext = toggleTodo(todosPrev, 1);

console.log(todosNext);
console.log(todosPrev[0] === todosNext[0]);
console.log(todosPrev[1] === todosNext[1]);
console.log(todosPrev[2] === todosNext[2]);
