'use strict';

class State {
  constructor(state) {
    this.visibilityFilter = state.visibilityFilter;
    this.todos = state.todos.map(function (todo) {
      return Object.assign({}, todo);
    });
  }

  changeFilter(value) {
    this.visibilityFilter = value;
  }

  toggleTodo(id) {
    /* 1. Replace `var` with `const` */
    /* 2. Rewrite callback function as arrow function */
    var todo = this.todos.find(function (todo) {
      return todo.id === id;
    });
    if (todo) {
      todo.completed = !todo.completed;
    }
  }

  addTodo(text) {
    // A very naive (and pure) algorithm to get a unique number identifier.
    /* 3. Rewrite callback function as arrow function */
    var id = this.todos.reduce(function (aggregate, item) {
      return aggregate <= item.id
        ? item.id + 1 // greater than id of current item
        : aggregate; // is greater than id of any item so far
    }, 0); // is greater than id of any item

    /* 4. Rewrite the object literal using shortcut for `id` and `text` */
    this.todos.push({
      id: id,
      text: text,
      completed: false,
    });
  }
}

// export public function to return an instance of the class
module.exports = function (stateInitial) {
  return new State(stateInitial);
}
