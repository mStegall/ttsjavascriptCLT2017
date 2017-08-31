# Lesson 6: Developing event-oriented applications

**Learning objective**: Read and write fluent JavaScript in which **objects** and **functions** work well together.

Let’s shift emphasis from object-oriented programming as a technique to **event-oriented applications** as a goal.

To **limit complexity** of an interactive application, **break it into chunks** which have tight cohesion and loose coupling.

Examples:

* Object chunks: **components** in React and **store** in Redux.
* Function chunks: **lifecycle methods** in React and **reducer** in Redux.

Comparison:

* An **object** can **encapsulate** data together with relevant methods:

  ```js
  var todoList = {
    items: [], // data
    addItem: function (item) {
      this.items.push(item); // this refers to individual instance (see below)
    }, // method
  };

  // The todoList object “knows” how to update itself.
  todoList.addItem({
    text: 'Develop event-oriented applications',
    completed: false,
  });
  ```

* A **function** can make all inputs **explicit** as arguments:

  ```js
  function addItem(items, item) {
    items.push(item);
  }

  var items = [];
  addItem(items, {
    text: 'Develop event-oriented applications',
    completed: false,
  });
  ```

## Constructor function

A **class** is a template or pattern for objects. An **instance** is an individual object.

In JavaScript:

* Define a **constructor** function for a class.
* Especially within methods of objects, `this` refers to the individual instance.
* To create an instance object of a class (also known as **instantiate** the class) `new` precedes the constructor function call. Don’t forget it! The main reason for the convention that names of constructor functions begin with an uppercase letter, is so proof-readers (or even better, linters) can make sure that `new` precedes constructor function calls.

Because JSON cannot include functions, you might write a `TodoList` constructor to initialize the items of an instance:

```js
function TodoList(items) {
  this.items = items;
  this.addItem = function (item) {
    this.items.push(item);
  };
}

var items = []; // imagine this comes as JSON from request to server
var todoList = new TodoList(items); // create an instance

// The todoList object “knows” how to update itself.
todoList.addItem({
  text: 'Develop event-oriented applications',
  completed: false,
});
```

## Challenge 1: Write function to return subset of DOM element

Work in teams to write the function in `challenge_1.js` and then make the improvements.

```js
var element = getElement(
  'P',
  [{name: 'id', value: 'challenge-1'}],
  ['Write function'] // start with string, but replace with text node below
);

console.log(JSON.stringify(element));
// {nodeName: 'P', attributes: [{name: 'id', value: 'challenge-1'}], childNodes: ['Write function']}
```

## Challenge 2: Rewrite as constructor function

Work in same teams to rewrite as constructor function in `challenge_2.js` and then make the improvements.

```js
var element = new Element(
  'p',
  [{name: 'id', value: 'challenge-2'}],
  ['Write constructor function']
);

console.log(JSON.stringify(element));
// {nodeName: 'P', attributes: [{name: 'id', value: 'challenge-2'}], childNodes: ['Write constructor function']}
```

## Interlude: Remember Object.assign to merge properties

Remember that JavaScript let’s you decide whether classes and constructors help limit complexity.

The `Object.assign` function is an important idiom to read and write, especially for configuration options:

```js
var PLUGINS = [
  ReactTestComponent,
  ReactElement,
  DOMElement,
  Immutable,
  AsymmetricMatcher,
];

var FORMAT_OPTIONS = {
  plugins: PLUGINS,
};
var FORMAT_OPTIONS_0 = Object.assign(
  {},
  FORMAT_OPTIONS,
  {indent: 0}
);

var FALLBACK_FORMAT_OPTIONS = {
  callToJSON: false,
  maxDepth: 10,
  plugins: PLUGINS,
};
var FALLBACK_FORMAT_OPTIONS_0 = Object.assign(
  {},
  FALLBACK_FORMAT_OPTIONS,
  {indent: 0}
);
```

## Challenge 3: Write function to serialize an object

* **serialize** is a synonym for stringify: Given object, return string.
* **deserialize** is a synonym for parse: Given string, return object.

Work in different teams than Challenge 2 to write the functions in `challenge_3.js`

```js
var element = new Element(
  'p',
  [{name: 'id', value: 'challenge-3'}],
  ['Write function to serialize'] // start with string, but replace with text node below
);

console.log(serialize(element));
// <p id="challenge-3">Write function to serialize</p>
```

## Prototype

* The constructor function for a class assigns properties of **individual instances**
  * especially data
  * also including **bound** callback functions
* The `prototype` object of a class contains properties **shared by** all instances
  * especially methods, either called as method invocations or to be bound for instances
  * also including constant or default data

```js
function Comment(data) {
  this.data = data; // data of individual instances
}

// Hints for Challenge 4 :)
Comment.prototype.serialize = function () {
  return '<!--' + this.data + '-->'; // to be called as method invocation
}
Comment.prototype.nodeType = 8; // constant shared by all instances
```

## Challenge 4: Rewrite as prototype properties

Work in same teams to use prototype in `challenge_4.js`

* Move constant `nodeType` properties that are shared by all instances.
* Write `serialize` methods for `Text` and `Comment` classes.
* Rewrite `serialize` function from preceding challenge as method of `Element` class.

## Homework

* Read [This in JavaScript](https://zellwk.com/blog/this/) by Zell Liew
* Read [this and Object Prototype](https://github.com/getify/You-Dont-Know-JS/blob/master/this%20&%20object%20prototypes/README.md#you-dont-know-js-this--object-prototypes) by Kyle Simpson
