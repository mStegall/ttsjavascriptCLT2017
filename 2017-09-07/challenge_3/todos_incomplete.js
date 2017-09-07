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
  var ul = document.createElement('ul');
  ul.setAttribute('id', filterId);

  ul.appendChild(renderRadio(filterId, 'all', true));
  ul.appendChild(renderRadio(filterId, 'uncompleted', false));
  ul.appendChild(renderRadio(filterId, 'completed', false));

  return ul;
}

function renderRadio(name, value, checked) {
  var input = document.createElement('input');
  input.setAttribute('type', 'radio');
  input.setAttribute('name', name);
  input.setAttribute('value', value);
  input.setAttribute('id', value);
  if (checked) {
    input.setAttribute('checked', 'checked');
  }

  var label =  document.createElement('label');
  label.setAttribute('for', value);
  label.innerHTML = value;

  var li = document.createElement('li');
  li.appendChild(input);
  li.appendChild(label);

  return li;
}

function renderAdd(addId) {
  var div = /* create the element */;
  div.setAttribute('id', addId);

  var input = /* create the element */;
  input.setAttribute('type', 'text');

  var button = /* create the element */;
  button.innerHTML = 'Add';

  /* append the input to the div */
  /* append the button to the div */

  return div;
}

function renderSection(state, ids) {
  var section = document.createElement('section');
  section.appendChild(renderHeading(ids.countId));
  section.appendChild(renderFilter(ids.filterId));
  section.appendChild(renderList(ids.todosId, state.todos));
  section.appendChild(renderAdd(ids.addId));

  return section;
}

function renderApp(state) {
  var ids = {
    addId: 'add',
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
    todos.className = value === 'uncompleted' || value === 'completed'
      ? value
      : '';
  }

  Array.prototype.forEach.call(filter.querySelectorAll('input'), function (input) {
    input.addEventListener('change', onChangeFilterItem);
  });

  function toggleTodo(todo) {
    todo.completed = !todo.completed;

    return todo; // support chaining pattern
  }

  function onClickTodoItem(i, event) {
    updateItemElementFromObject(event.currentTarget, toggleTodo(state.todos[i])); // update the item
    update(); // update the count
  }

  Array.prototype.forEach.call(todos.querySelectorAll('li'), function (li, i) {
    li.addEventListener('click', onClickTodoItem.bind(null, i));
  });

  function addTodo(text) {
    var todo = {
      /* initial properties of new item */
    };
    state.todos.push(todo);
    return todo; // support chaining
  }

  function addItem() {
    var input = document.querySelector('#' + ids.addId + ' input');
    var todo = addTodo(input.value);
    var li = /* create the element */;
    updateItemElementFromObject(li, todo);
    /* add event listener to li and bind it to the correct argument value */
    /* append li to todos in the DOM */
    /* assign the value property of the input element to empty string */
  }

  var buttonAdd = document.querySelector('#' + ids.addId + ' button').addEventListener('click', addItem);
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
