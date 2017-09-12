'use strict';

var renderTodos = (function () {
  function renderHeading (state) {
    // Here is an example for you to follow:
    return $('<h3>Todo list</h3>');
  }

  function renderList(state) {
    return $(/* unordered list element with class="list" */)
      .append(state.todos.map(function (todo) {
        return $(/* list item element */)
          /* has the following text: todo.text */
          .toggleClass('completed', todo.completed);
      }));
  }

  // return the public function
  return function (stateInitial) {
    var state = new State(stateInitial);

    var $heading = renderHeading(state);
    var $list = renderList(state);

    // Here is an example for you to follow:
    return $('<section class="TodoApp"></section>')
      .append($heading, $list);
  };
}()); // IIFE: immediately-invoked function expression
