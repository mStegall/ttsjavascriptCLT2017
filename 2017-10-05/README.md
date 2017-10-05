# Lesson 16: React part 2

## Preview for this class

1. Only if you **did not already** install at the last class: `npm install --global create-react-app`

2. Change to a directory which you want to be the **parent** of the `todo-react` directory

3. Create the child `todo-react` directory: `create-react-app todo-react`

4. Change to the child `todo-react` directory: `cd todo-react`

5. As you might have seen in the last class: `npm install --save classnames`

6. Start the app in a Web browser: `npm start`

7. Using either Explorer or Finder, or another Command Prompt or Terminal, copy files **from** the class repo `src` director **to** the app `src` directory:

    * `cp wherever1/2017-10-05/src/*.css wherever2/todo-react/src`
    * `cp wherever1/2017-10-05/src/*.js wherever2/todo-react/src`

8. Open the `todo-react` directory in your code editor.

9. To see “hot reloading” replace `React App` with `Todo List` in the `public/index.html` file.

## Review of last class

* React helps you **describe interfaces** in JavaScript. Given state, return elements.

* You can think of React **components** like application-specific HTML elements.

* The `render` method of a **class** component or returned value of a **function** component replace templating languages with JSX notation for elements and JavaScript code for logic.

## Components

In most React applications: one component per file. Name of component is name of file, plus `.js` :)

Minimal starter file for a React **function** component:

```js
import React from 'react';

const FunctionComponent = (/* input props */) => /* output elements */;

export default FunctionComponent;
```

Minimal starter file for a React **class** component:

```js
import React, {Component} from 'react';

class ClassComponent extends Component {
  constructor(props) {
    super(props);

    // Either or both of the following:
    this.state = {/* initial state */};
    this._onSomeEvent = this._onSomeEvent.bind(this);
  }

  _onSomeEvent(event) {
    /* handle some type of event */
  }

  render() {
    // Either of both of the following:
    const {/* relevant props */} = this.props;
    const {/* relevant state */} = this.state;
    return (
      /* output elements */
    );
  }
}

export default ClassComponent;
```

## create-react-app

Includes `babel-preset-react` so you can write elements as JSX, a syntax extension to JavaScript.

```html
<li
  key={id}
  className={completed ? 'completed' : 'uncompleted'}
>
  {text}
</li>
```

```js
React.createElement(
  'li',
  {
    key: id,
    className: completed ? 'completed' : 'uncompleted'
  },
  text
)
```

Includes `webpack` to bundle an application for development or production.

Includes `jest` to test an application.

## Challenge 1

Make the first three changes described in the `/* comment */` in the `src/TodoList.js` file in your `todo-react` directory.

## Challenge 2

Make the remaining changes described in the `/* comment */` in the `src/TodoItem.js` and `src/TodoList.js` files in your `todo-react` directory.

## Challenge 3

To display counts in the heading:

1. In the `src/Heading.js` file: do what the first `/* comment */` requests.
2. In the `src/App.js` file:
    * Add an import statement for the `Heading` component.
    * Add a `<Heading todos={todos}/>` element to the rendered elements preceding `<TodoList todos={todos}/>`
3. In the `Heading.js` file: do what the second `/* comment */` requests.

## Handle events when people interact

Following the example of jQuery, React provides an event system that is similar to DOM, but without browser inconsistencies and quirks.

From [https://facebook.github.io/react/docs/handling-events.html](https://facebook.github.io/react/docs/handling-events.html)

> Handling events with React elements is very similar to handling events on DOM elements. There are some syntactic differences:
> * React events are named using camelCase, rather than lowercase.
> * You pass a function as the event handler, rather than a string.

### Do together: add event handler as prop of React element

The React prop looks like HTML attribute, but is equivalent to `addEventListener` method of DOM elements.

An underscore in the name of a callback method a hint that it’s “private” instead of public.

In the `src/App.js` file:

* Add the `import` statement for the `toggleTodo` function.
* Define the `_toggleTodo` method in the `App` class.
* Add the `onClick={this._toggleTodo}` prop to the `TodoList` element.

```js
import {filter, todos} from './data';
import {
  toggleTodo,
} from './logic';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filter,
      todos,
    };
  }

  _toggleTodo(id) {
    this.setState((statePrev) => toggleTodo(statePrev, id));
  }

  render() {
    const {
      todos,
    } = this.state;

    return (
      <section className="TodoApp">
        <Heading todos={todos}/>
        <TodoList onClick={this._toggleTodo} todos={todos}/>
      </section>
    );
  }
}
```

In the `src/TodoList.js` file:

* Add `onClick` to the argument destructuring.
* Add the `onClick={() => {onClick(id);}` prop to the `li` element. This is a way to bind `id` of each item.

```js
const TodoList = ({onClick, todos}) => (
  <ul className="list">
    {
      todos.map(({completed, id, text}) => (
        <TodoItem completed={completed} id={id} text={text} onClick={onClick}/>
      ))
    }
  </ul>
);
```

In the `src/TodoItem.js` file:

```js
const TodoItem = ({completed, id, text, onClick}) => (
  <li key={id} className={completed ? 'completed' : 'uncompleted'} onClick={() => {onClick(id);}>
    {text}
  </li>
);
```

When you click a todo item: `Uncaught TypeError`

### Bind this in constructor

In the `src/App.js` file, the constructor needs to bind `this` for the callback method.

* On the right side of the assignment, `this._toggleTodo` refers to a generic property of the class prototype, shared by all instances.
* On the left side of the assignment, `this._toggleTodo` refers to a property whose value is a bound method, for a specific instance.

```js
constructor(props) {
  super(props);
  this.state = {
    filter,
    todos,
  };
  this._toggleTodo = this._toggleTodo.bind(this);
}
```

### Bind this with arrow function as value of class property

You might see the following definition of a callback method using a proposed ECMAScript feature. Although create-react-app and create-react-native-app include the babel configuration to compile this feature to standard JavaScript, we recommend the preceding bind method (pardon pun :)

```js
_toggleTodo = (id) => {
  this.setState((statePrev) => toggleTodo(statePrev, id));
}
```

### Update state in callback methods

A callback method to handle an event often updates the state of the application. In React:

* **Don’t** change the value of `this.state` directly, no never, not ever!
* **Do** call the `this.setState()` method.

### How not to refer to the previous state

From [State Updates May Be Asynchronous](https://facebook.github.io/react/docs/state-and-lifecycle.html#state-updates-may-be-asynchronous)

> React may batch multiple `setState()` calls into a single update for performance.

> Because this.props and `this.state` may be updated asynchronously, you should not rely on their values for calculating the next state.

```js
  _handleClick(event) {
    this.setState({
      value: this.state.value + 1, // INCORRECT EXAMPLE
    });
  }
```

### How to refer to the previous state

> Use a second form of `setState()` that accepts a function rather than an object. That function will receive the previous state as the first argument, and the props at the time the update is applied as the second argument.

```js
  _handleClick(event) {
    this.setState((statePrev) => ({
      value: statePrev.value + 1,
    }));
  }
```

> Think of `setState()` as a request rather than an immediate command to update the component.

> `setState()` will always lead to a re-render unless shouldComponentUpdate() returns false.

### Separate business logic from event handlers

You avoid the preceding problem if:

* An event handler is responsible for relevant values like `id` in the interaction.
* A separate function like `toggleTodo` is responsible for business logic to update state.

```js
_toggleTodo = (id) => {
  this.setState((statePrev) => toggleTodo(statePrev, id));
}
```

## Challenge 4: Filter the list

In the `src/App.js` file:

* Add `changeFilter` to the `import` statement from `'./logic'`

* Add `_changeFilter` method to `App` class:

  ```js
  _changeFilter(filter) {
    this.setState((statePrev) => changeFilter(statePrev, filter));
  }
  ```

* Bind `_changeFilter` in the `constructor` of `App` class

* Add an import statement for the `Filter` component

* Add `filter` to destructuring assignment in `render` method of `App` class

* Add a `<Filter filter={filter} onChange={this._changeFilter}/>` element to the rendered elements preceding `<TodoList onClick={this._toggleTodo} todos={todos}/>`

Click a filter option. **Why** doesn’t it affect the todo list?

* Add a prop to TodoList: `<TodoList filter={filter} onClick={this._toggleTodo} todos={todos}/>`

## Challenge 5: Add new item

In the `src/App.js` file:

* Add `addTodo` to the `import` statement from `'./logic'`

* Add `_addTodo` method to `App` class:

  ```js
  _addTodo(text) {
    this.setState((statePrev) => addTodo(statePrev, text));
  }
  ```

* Bind `_addTodo` in the `constructor` of `App` class

* Add an import statement for the `Adder` component

* Add a `<Adder onSubmit={this._addTodo}/>` element to the rendered elements preceding `</section>`

We need to understand some things in the `src/Adder.js` file:

* `event.preventDefault()` in the `_onSubmit` method.
* `event.target.value` in the `_onChange` method.
* `value={this.state.text}` prop in the `input` element.

## Challenge 6: Improve visual design and interactive feedback

In the `src/App.js` file:

* Add an import statement for the `Symbols` component.
* Add a `<Symbols/>` element to the rendered elements preceding `<Heading todos={todos}/>` element.

In the `src/TodoItem.js` file:

* Replace `{text}` in the `li` element with the following.

  ```js
  <svg>
    <use xlinkHref={`#${completed ? 'completed' : 'uncompleted'}`}/>
  </svg>
  <div>
    {text}
  </div>
  ```

## Challenge 7: Future object spread operator

Make the change described in the `/* comment */` in the `src/logic.js` file. Especially for Dave :)

## Homework due Tuesday 2017-10-10

To get a taste of learning resources on the React web site, read:

* [Components and Props](https://facebook.github.io/react/docs/components-and-props.html)
* [Conditional Rendering](https://facebook.github.io/react/docs/conditional-rendering.html)
* [Forms](https://facebook.github.io/react/docs/forms.html)
* [React Components, Elements, and Instances](https://facebook.github.io/react/blog/2015/12/18/react-components-elements-and-instances.html)
