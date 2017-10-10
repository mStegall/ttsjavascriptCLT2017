# Lesson 17: React lifecycle

From *Learning React* by Alex Banks and Eve Porcello:

> The component lifecycle consists of methods that are invoked when a component is **mounted** or **updated**.

> The `render` method is a part of the component lifecycle.

Like `filter`, `map`, `reduce` methods of `Array` class, lifecycle methods are available on any instance of `React.Component` class. To write and read code more quickly and clearly:

* select or search for a method that solves a **generic** problem of interactive applications,
* and then write or read the application-**specific** code

## Quick review of last week

How to decide between a **function** component and a **class** component?

* A **function** component depends **only on props**: given props as input, return elements as output.
* A **class** component changes **its own private state** when it handles events. For example:
    * Clock component can set up its own timer and update itself every second
    * Form component can validate inputs as people type and display feedback

Handling **events** in React elements is similar to DOM elements. For an event prop:

* **name** is camelCase in React. For example, `onClick` in React instead of `onclick` in DOM.
* **value** is a callback function. React and jQuery have similar issues and solutions for **binding** context or arguments.

## Mounting lifecycle

* `componentDidMount()` is invoked **after** the rendered elements of a component instance have been **inserted** into the DOM. It is a good place to start timers or make API requests.

* `componentWillUnmount()` is invoked **before** the rendered elements of a component instance are **removed** from the DOM. It is a good place to stop timers.

Although I wrote DOM, React Native for mobile devices also has these lifecycle methods.

## Challenge 1: start and stop timer

### Read and try online

1. Open in a web browser: [https://reactjs.org/docs/state-and-lifecycle.html](https://reactjs.org/docs/state-and-lifecycle.html)

2. Read the first code example, and then click the link to try it on CodePen.

3. Read the second code example, and then click the link to try it on CodePen.

### Do on your computer:

1. In Command Prompt or Terminal:

    * Change to a directory which you want to be the **parent** of the `clock-react` directory
    * Create the child `clock-react` directory: `create-react-app clock-react`
    * Change to the child `clock-react` directory: `cd clock-react`

2. In Explorer or Finder:

    * Delete the files that `create-react-app` put in your `clock-react/src` directory.
    * Copy the 3 files **from** the class repo `1-clock/src` directory **to** your `clock-react/src` directory.

3. Open the `clock-react` directory in your code editor.

4. In your `public/index.html` file, replace **React App** with **React Clock**

5. To start the app in a Web browser, in Command Prompt or Terminal, type: `npm start`

6. In your `clock-react/src/Clock.js` file:

    * Do the 5 steps under **Converting a Function to a Class** in the online Web page. The browser “hot reloads” when you save your changes to the file.

    * Do the 3 steps under **Adding Local State to a Class**.

    * Copy code under **Adding Lifecycle Methods to a Class** and paste into your `clock.js` file.

7. In your `clock-react/src/App.js` file: add two more `<Clock/>` elements to show that multiple instances of the `Clock` component have independent and isolated state.

As homework, you will read the rest of the online Web page.

## Challenge 2: make API request

### Install a local JSON server with realistic data:

1. In Explorer or Finder:

    * Copy the `2-todo-server` directory, and then paste it into whichever dire the **parent**
    * Rename the copied `2-todo-server` directory as `todo-server`

2. In Command Prompt or Terminal:

    * Change to your copied and renamed `todo-server` directory
    * Install dependencies: `npm install`
    * Start the server: `npm start`
    * Notice the port number

### Extend or create your React Todos application

If you have `todo-react` directory from last week, go to step 3.

1. In Command Prompt or Terminal:

    * Change to a directory which you want to be the **parent** of the `todo-react` directory
    * Create the child `todo-react` directory: `create-react-app todo-react`
    * Change to the child `todo-react` directory: `cd todo-react`

2. In Explorer or Finder:

    * This time, **do not delete** the files that `create-react-app` put in your `todo-react/src` directory.
    * Copy the 10 files **from** the class repo `2-todo-app/src` directory **to** your `todo-react/src` directory. You will replace 3 existing files and add 7 new files.

3. Open the `todo-react` directory in your code editor.

4. In your `public/index.html` file, replace **React App** with **React Lifecycle Todo List**

5. To start the app in a Web browser, in Command Prompt or Terminal, type: `PORT=3003 npm start`

6. In your `todo-react/src/App.js` file:

    * Make sure that the initial state is empty in the `constructor` function:

    ```js
    this.state = {
      filter: 'all',
      todos: [],
    };
    ```

    * Copy and paste the following code preceding the class component:

    ```js
    const dataURL = `http://localhost:${process.env.DATA_PORT}`;

    function fetchCheck(response){
      if (response.status !== 200) {
        throw new Error(response.status);
      }

      return response;
    }
    ```

    * Copy and paste the following code within the class component:

    ```js
    componentDidMount() {
      fetch(`${dataURL}/todos`)
        .then(fetchCheck)
        .then((response) => response.json())
        .then((todos) => {
          console.log(todos);
          this.setState({
            todos
          });
        });
    }
    ```

## Updating lifecycle

* `componentWillReceiveProps(propsNext)` is invoked **before** a mounted component instance receives new props. React might call this method even if the props have not changed (for example, whenever the parent component causes this child component to re-render). This method can call the `setState` method, **if** new props affect current state. However, you might rewrite components to “lift state up” instead (see homework reading).

* `shouldComponentUpdate(propsNext, stateNext)` is invoked **before** the `render` method of a mounted component instance. It can return `false` if the rendered output would not be affected by the change in props or state, or both.

From documentation about [shouldComponentUpdate()](https://reactjs.org/docs/react-component.html#shouldcomponentupdate)

> The **default behavior** is to re-render on every state change, and in the vast majority of cases you should rely on the default behavior.

> If you determine a specific component is slow **after profiling**, you may change it to inherit from `React.PureComponent` which implements `shouldComponentUpdate()` with a shallow prop and state comparison.

## Error lifecycle

From documentation about [Error Boundaries](https://reactjs.org/docs/error-boundaries.html)

> A JavaScript error in a part of the UI shouldn’t break the whole app. To solve this problem for React users, React 16 introduces a new concept of an “error boundary”.

> Error boundaries are React components that catch JavaScript errors anywhere in their child component tree, log those errors, and display a fallback UI instead of the component tree that crashed. Error boundaries catch errors during rendering, in lifecycle methods, and in constructors of the whole tree below them.

> As of React 16, errors that were not caught by any error boundary will result in unmounting of the whole React component tree.

* `componentDidCatch(error, info)` works like a JavaScript `catch {}` block, but for components.

## Challenge 3

1. Add an error in your `todo-react/src/App.js` file: replace `filter` with `fliter`

2. Add a component to catch the error. We will make it up as we go along :)

3. Open in a web browser: [https://reactjs.org/docs/error-boundaries.html](https://reactjs.org/docs/error-boundaries.html)

4. Open the `todo-react/src/ErrorBoundary.js` file

## Homework due Thursday 2017-10-19

* Read the rest of the page starting at [Using State Correctly](https://reactjs.org/docs/state-and-lifecycle.html#using-state-correctly)
* Read: [Lifting State Up](https://reactjs.org/docs/lifting-state-up.html)
* Finish reading: [Error Boundaries](https://reactjs.org/docs/error-boundaries.html)
* Review from last week: [React Components, Elements, and Instances](https://facebook.github.io/react/blog/2015/12/18/react-components-elements-and-instances.html)
