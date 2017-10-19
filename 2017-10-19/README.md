# Lesson 20: Redux

## Questions to ask before you add project dependencies

Questions from *Articulating Design Decisions* by Tom Greever.

* What **problem** does this solve?

    Answers from [React Context](https://reactjs.org/docs/context.html)

    > With React, it's easy to track the flow of data through your React components. When you look at a component, you can see which props are being passed, which makes your apps easy to reason about.

    > In some cases, you want to pass data through the component tree without having to pass the props down manually at every level.

    > State management libraries like [Redux](http://redux.js.org) or [MobX](https://mobx.js.org/) and their React bindings are a good choice for managing state that is relevant to many components.

* How does this affect the **user**?

    Answers from [Redux Read Me](http://redux.js.org/)

    > Redux helps you write applications that behave consistently, run in different environments, and are easy to test.

    > The beauty of this pattern is how well it scales to large and complex apps.

    > It is possible to trace every mutation to the action that caused it. You can record user sessions and reproduce them just by replaying every action.

* Why is it **better** than the alternative?

    Answers from [You Might Not Need Redux](https://medium.com/@dan_abramov/you-might-not-need-redux-be46360cf367) by Dan Abramov

    > Redux offers a tradeoff. It asks you to:

    > Describe application state as plain objects and arrays.
    > Describe changes in the system as plain objects.
    > Describe the logic for handling changes as pure functions.

    > But if you trade something off, make sure you get something in return.

    > If you’re just learning React, don’t make Redux your first choice. Instead learn to think in React.

## Todo React with Redux

### Review of `create-react-app`, part 1

Let’s use the `todo-react` project that you already created. So **do not** do the following:

1. Change to the **parent** directory of new app.

2. Create a new application in a **child** directory: `create-react-app todo-react`

3. Change to the **child** directory: `cd todo-react`

### Review of `create-react-app`, part 2

Please do the following:

2. In Explorer or Finder, go to your `todo-react/src` directory, and then:

    * Delete the files in the directory.
    * Copy 3 files and 2 subdirectories **from** the class repo `2017-10-19/todo-react/src` directory **into** your `src` directory.

3. In an editor, open your `todo-react` directory.

4. In the `public/index.html` file, change the text in the `title` element to **Todo React with Redux**

5. In Explorer or Finder, copy `db.json` **from** the class repo `2017-10-19/todo-server` directory **into** your `todo-server` directory.

6. In Terminal or Command Prompt, change to your `todo-server` directory, and then start the server: `npm start`

7. In another Terminal or Command Prompt, change to your `todo-react` directory:

    * Install additional dependencies: `npm install --save redux react-redux`
    * Start the application: `npm start`

### state

> In Redux, all the application **state** is stored as a single object. It’s a good idea to think of its shape before writing any code. What’s the minimal representation of your app’s state as an object?

See `todo-server/db.json` for the initial state.

### actions

> **Actions** are payloads of information that send data from your application to your store. They are the *only* source of information for the store.

See `todo-react/src/actions.js` for action creator functions.

### reducer

> The **reducer** takes the previous state and an action, and returns the next state.

> the reducer must be pure. **Given the same arguments, it should calculate the next state and return it. No surprises. No side effects. No API calls. No mutations. Just a calculation.**

See `todo-react/src/reducers/todos.js` for a reducer function.

### store

> The **store** is the object that brings them together. The store has the following responsibilities:

* Holds application state
* Allows access to state via `getState()`
* Allows state to be updated via `dispatch(action)`
* Registers listeners via `subscribe(listener)`
* Handles unregistering of listeners via the function returned by `subscribe(listener)`

Instead of the calling store methods directly, we will use the `react-redux` package.

> You’ll only have a **single store** in a Redux application.

> When you want to split your data handling logic, you'll use **reducer composition** instead of many stores.

See `todo-react/src/reducers/index.js` for `combineReducers` function.

### Replace React state with Redux store

Edit in `src/index.js`

1. After existing imports, copy and paste some more for Redux:

    ```js
    import {createStore} from 'redux';
    import {Provider} from 'react-redux';
    import reducer from './reducers';
    ```

2. Replace the existing `ReactDOM.render` call with the following:

    ```js
    const store = createStore(reducer);

    ReactDOM.render((
        <Provider store={store}>
          <App />
        </Provider>
      ),
      document.getElementById('root')
    );
    ```

Edit in `src/components/App.js`

1. After the existing imports, copy and paste a few more:

    ```js
    import {connect} from 'react-redux';
    import {
      initTodos,
    } from '../actions';
    ```

2. At the end, replace `export default App;` with the following:

    ```js
    // A container component subscribes to relevant parts of state in the Redux store.
    const mapStateToProps = ({filter, todos}) => ({
      filter,
      todos,
    });

    const mapDispatchToProps = {
      initTodos,
    };

    export default connect(mapStateToProps, mapDispatchToProps)(App);
    ```

3. In `ComponentDidMount` method, replace `this.setState({todos});` with `this.props.initTodos(todos);`

4. In `render` method, replace `this.state` with `this.props`

5. In `constructor` method, delete assignment statement for `this.state`

## Challenge 1 together: handle `toggleTodo` event

Edit in `src/components/App.js`

1. Near the beginning, add `toggleTodo` action creator function to `import`

    ```js
    import {
      initTodos,
      toggleTodo,
    } from '../actions';
    ```

2. Near the end, add `toggleTodo` action creator function to `mapDispatchToProps`

    ```js
    const mapDispatchToProps = {
      initTodos,
      toggleTodo,
    };
    ```

3. Copy and paste an event handler method preceding the `render` method:

    ```js
    _toggleTodo(id) {
      this.props.toggleTodo(id);
    }
    ```

4. To bind the event handler method in the `constructor`, copy and paste:

    ```js
    this._toggleTodo = this._toggleTodo.bind(this);
    ```

5. In `TodoList` element in `render` method, add `onClick={this._toggleTodo}` prop.

Edit in `src/components/TodoList.js`

1. Add `onClick` to destructured object arguments of `TodoList` function component.

2. Copy and paste `onClick={() => {onClick(id);}}` prop into `TodoItem` element.

Edit in `src/components/TodoItem.js`

1. Add `onClick` to destructured object arguments of `TodoItem` function component.

2. Copy and paste `onClick={onClick}` prop into `li` element.

Save your changes to the 3 files. After the application “hot reloads” click todos.

## Challenge 2 as pair programmers A: handle `changeFilter` event

Edit in `src/components/App.js`

1. Near the beginning, add `changeFilter` action creator function to `import`

2. Near the end, add `changeFilter` action creator function to `mapDispatchToProps`

3. Call the `changeFilter` action creator function in the `_changeFilter` event handler method. For both functions, `filter` is the argument.

4. Bind the `_changeFilter` event handler method in the `constructor`

5. In `Filter` element in `render` method, add `onChange={this._changeFilter}` prop.

Edit in `src/components/Filter.js`

1. Add `onChange` to destructured object arguments of `Filter` function component.

2. Copy and paste `onChange={(event) => onChange(event.target.value)}` prop into `input` element.

Save your changes to the 2 files. After the application “hot reloads” click filter options.

## Challenge 3 as pair programmers B: handle `addTodo` event

Edit in `src/components/App.js`

1. Near the beginning, add `addTodo` action creator function to `import`

2. Near the end, add `addTodo` action creator function to `mapDispatchToProps`

3. Call the `addTodo` action creator function in the `_addTodo` event handler method. For both functions, `text` is the argument.

4. Bind the `_addTodo` event handler method in the `constructor`

5. In `Adder` element in `render` method, add `onSubmit={this._addTodo}` prop.

Edit in `src/components/Adder.js`

1. Copy and paste `this.props.onSubmit(this.state.text);` statement into `_onSubmit` method

    * following `event.preventDefault()`
    * preceding `this.setState()`

Save your changes to the 2 file. After the application “hot reloads” add todo items.

## Challenge 4 as pair programmers A/B: Edit tests

Replace action object with action creator function.

In another Terminal or Command Prompt, change to your `todo-react` directory, and then start the unit tests for reducers: `npm run test`

Edit in `src/reducers/__tests__/todos.test.js`

1. (A) Import the `addTodo` and `toggleTodo` action creator functions:

    ```js
    import {
      addTodo,
      toggleTodo,
    } from '../../actions';
    ```

2. (A) Find in the `adds an item to an empty array` test:

    ```js
    const next = reducer(prev, {
      type: 'ADD_TODO',
      text,
    });
    ```

3. (A) Replace the action object with an action creator function:

    ```js
    const next = reducer(prev, addTodo(text));
    ```

4. (B) Find in the `toggles an item from uncompleted to completed` test:

    ```js
    const next = reducer(prev, {
      type: 'TOGGLE_TODO',
      id,
    });
    ```

5. (B) Replace the action object with an action creator function:

    ```js
    const next = reducer(prev, toggleTodo(id));
    ```

## Challenge 5 as pair programmers A/B: Add tests

In `src/reducers/__tests__/todos.test.js` replace comments with tests:

* (A) Write a test that adds an item to a non-empty array

* (B) Write a test that toggles an item from completed to uncompleted

## Inspiration

* [Slim Redux in 99 lines](https://gist.github.com/gaearon/ffd88b0e4f00b22c3159)
* [Getting Started with Redux](https://egghead.io/courses/getting-started-with-redux) 30 free lessons in 121 minutes = 4 minute average
* [Building React Applications with Idiomatic Redux](https://egghead.io/courses/building-react-applications-with-idiomatic-redux) 27 free lessons in 137 minutes = 5 minute average
