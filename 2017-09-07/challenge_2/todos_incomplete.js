function renderList(todosId, todos) {
  var ul = document.createElement('ul');
  ul.setAttribute('id', todosId);

  todos.forEach(function (todo) {
    var li = document.createElement('li');
    updateItemElementFromObject(li, todo);
    ul.appendChild(li);
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
  var h3 = document.createElement('h3');

  var span1 = document.createElement('span');
  span1.innerHTML = 'Todo list: ';
  h3.appendChild(span1);

  var span2 = document.createElement('span');
  // Note: An update function will assign the text of this span.
  span2.setAttribute('id', countId); // Hint: from function argument
  h3.appendChild(span2);

  var span3 = document.createElement('span');
  span3.innerHTML = ' uncompleted';
  h3.appendChild(span3);

  return h3;
}

function renderFilter(filterId) {
  var ul = /* create the element */;
  ul.setAttribute('id', filterId);

  ul.appendChild(renderRadio(filterId, 'all', true));
  ul.appendChild(renderRadio(filterId, 'uncompleted', false));
  ul.appendChild(renderRadio(filterId, 'completed', false));

  return ul;
}

function renderRadio(name, value, checked) {
  var input = /* create the element */;
  input.setAttribute('type', 'radio');
  input.setAttribute('name', name);
  input.setAttribute('value', value);
  input.setAttribute('id', value);
  if (checked) {
    input.setAttribute('checked', 'checked');
  }

  var label = /* create the element */;
  label.setAttribute('for', value);
  label.innerHTML = value;

  var li = /* create the element */;
  li.appendChild(input);
  li.appendChild(label);

  return li;
}

function renderSection(state, ids) {
  var section = document.createElement('section');
  section.appendChild(renderHeading(ids.countId));
  section.appendChild(renderFilter(ids.filterId));
  section.appendChild(renderList(ids.todosId, state.todos));

  return section;
}

function renderApp(state) {
  var ids = {
    countId: 'count',
    filterId: 'filter',
    todosId: 'todos',
  };

  var root = document.getElementById('root');
  root.appendChild(renderSection(state, ids));

  var filter = document.getElementById(ids.filterId);
  var count = document.getElementById(ids.countId);
  var todos = document.getElementById(ids.todosId);
  var itemsUncompleted = todos.getElementsByClassName('uncompleted');

  function update() {
    count.innerHTML = itemsUncompleted.length;
  }

  update(); // initialize

  function setFilter(value) {
    state.visibilityFilter = value;
    return value; // support chaining pattern
  }

  function onChangeFilterItem(event) {
    var value = setFilter(event.target.value);
    /* if value is 'uncompleted' or 'completed' then assign value to todos.className */
    /* otherwise assign empty string to todos.className */
  }

  Array.prototype.forEach.call(filter.querySelectorAll('input'), function (input) {
    input.addEventListener('change', onChangeFilterItem);
  });

  function toggleTodo(todo) {
    /* assign to completed property of todo the opposite boolean value */

    return todo; // support chaining pattern
  }

  function onClickTodoItem(i, event) {
    updateItemElementFromObject(event.currentTarget, toggleTodo(state.todos[i])); // update the item
    update(); // update the count
  }

  Array.prototype.forEach.call(todos.querySelectorAll('li'), function (li, i) {
    li.addEventListener('click', /* bind callback with null as context and i as argument*/);
  });
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
