const React = require('react');
const ReactDOMServer = require('react-dom/server');

const data = {
  visibilityFilter: 'all',
  todos: [
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
  ],
};

const lis = data.todos.map(todo => React.createElement(
  'li',
  {
    key: todo.id,
    style: {
      color: todo.completed ? 'black' : 'green',
      textDecoration: todo.completed ? 'line-through' : 'none',
    },
  },
  todo.text
));

const ul = React.createElement('ul', null, ...lis);

process.stdout.write(`<!DOCTYPE html>
<html>
<head>
<meta charset='utf-8'/>
<title>07-spread-createElement</title>
</head>
<body>
<div id="root">${ReactDOMServer.renderToStaticMarkup(ul)}</div>
</body>
</html>`);
