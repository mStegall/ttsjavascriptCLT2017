function renderList(todosId, todos) {
  var ul = document.createElement('ul');
  ul.setAttribute('id', todosId);

  todos.forEach(function (todo) {
    var li = /* create the element */;
    updateItemElementFromObject(li, todo);
    /* append li to ul */;
  });

  return ul;
}

function updateItemElementFromObject(li, todo) {
  li.innerHTML = todo.text;
  li.setAttribute('class', todo.completed
    ? 'completed'
    : 'uncompleted'
  );
}

function renderHeading (countId) {
  var h3 = /* create the element */;

  var span1 = /* create the element */;
  span1.innerHTML = /* assign text of first span */;
  h3.appendChild(span1);

  var span2 = /* create the element */;
  // Note: An update function will assign the text of this span.
  span2.setAttribute('id', /* value */); // Hint: from function argument
  h3.appendChild(span2);

  var span3 = /* create the element */;
  span3.innerHTML = /* assign text of last span */;
  h3.appendChild(span3);

  return h3;
}

function renderSection(state, ids) {
  var section = /* create the element */;
  section.appendChild(renderHeading(ids.countId));
  var ul = renderList(ids.todosId, state.todos);
  /* append ul to section */;

  return section;
}

function renderApp(state) {
  var ids = {
    countId: 'count',
    todosId: 'todos',
  };

  var root = document.getElementById('root');
  root.appendChild(renderSection(state, ids));

  var count = document.getElementById(ids.countId);
  var todos = document.getElementById(ids.todosId);
  var itemsUncompleted = todos.getElementsByClassName('uncompleted');

  function update() {
    count.innerHTML = itemsUncompleted.length;
  }

  update(); // initialize
}

renderApp({
  visibilityFilter: 'all',
  todos: [
    {
      text: 'Find elements',
      completed: true,
    },
    {
      text: 'Add listeners',
      completed: false,
    },
    {
      text: 'Do things',
      completed: false,
    },
  ],
});
