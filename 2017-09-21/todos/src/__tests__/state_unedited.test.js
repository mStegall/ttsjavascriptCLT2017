var getState = require('../state');

describe('todos', function () {
  var text0 = 'Write a “fail-first” test';
  var todo0 = {
    id: 0,
    text: text0,
    completed: true,
  };

  var text1 = 'Write code to make the test pass';
  var todo1 = {
    id: 1,
    text: text1,
    completed: false,
  };

  var text2 = 'If a test fails after changes to code, decide is it regress or progress';
  var todo2 = {
    id: 2,
    text: text2,
    completed: false,
  };

  describe('assertions', function () {
    var todos = [todo0, todo1, todo2];

    it('has expected length', function () {
      expect(todos.length).toBe(3);
    });

    test('toBe tests strict equality', function () {
      expect(todos).toBe(todos);
      expect(todos).not.toBe([todo0, todo1, todo2]);
    });

    test('toEqual tests value equivalence', function () {
      expect(todos).toEqual([todo0, todo1, todo2]);
    });

    test('toMatchObject tests subset value equivalence', function () {
      expect(todo1).toMatchObject({text: text1});
    });
  });

/*
  // Challenge 1
  it('toggles an uncompleted todo', function () {
    var state = getState({
      todos: [todo0, todo1, todo2]
    });
    state.toggleTodo(todo1.id);
    //TODO expect(RECEIVED).toBe(EXPECTED)
  });
*/

/*
  // Challenge 2
  it('toggles a completed todo', function () {
    var state = getState({
      todos: [todo0, todo1, todo2]
    });
    state.toggleTodo(todo0.id);
    //TODO expect(RECEIVED).toBe(EXPECTED);
  });
*/

/*
  // Challenge 3
  it('adds an item to an empty list', function () {
    var state = getState({
      //TODO todos: WHAT,
    });
    var text = 'Write an assertion';
    state.addTodo(text);

    expect(state.todos[0]).toMatchObject(
      {
        //TODO EXPECTED properties
      }
    );
  });
*/

/*
  // Challenge 4
  it('adds an item to a non-empty list', function () {
    var state = getState({
      //TODO todos: WHAT,
    });
    var text = 'Write another assertion';
    state.addTodo(text);

    expect(RECEIVED).toMatchObject(
      {
        // TODO EXPECTED properties
      }
    );
  });
*/
});
