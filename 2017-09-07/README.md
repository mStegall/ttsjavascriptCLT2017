# Lesson 8: Document Object Model

A Web page [Document](https://developer.mozilla.org/en-US/docs/Web/API/Document) has a “tree” structure of [Node](https://developer.mozilla.org/en-US/docs/Web/API/Node) objects, especially:

* [Element](https://developer.mozilla.org/en-US/docs/Web/API/Element) which has properties including `children`, `className`, `innerHTML`, `tagName`
* [Text](https://developer.mozilla.org/en-US/docs/Web/API/Text) which has `data` property
* [Comment](https://developer.mozilla.org/en-US/docs/Web/API/Comment) which has `data` property

## Find elements

[getElementById](https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementById) returns an element object, or `null` if it does not find the identifier.

You will see the following idiom in React to render an application within a “root” element:

```js
var app = React.createElement(App, properties);

ReactDOM.render(app, document.getElementById('root'));
```

[getElementsByTagName](https://developer.mozilla.org/en-US/docs/Web/API/Element/getElementsByTagName) and [getElementsByClassName](https://developer.mozilla.org/en-US/docs/Web/API/Element/getElementsByClassName) return an [HTMLCollection](https://developer.mozilla.org/en-US/docs/Web/API/HTMLCollection) which is an array-like object:

* has `length` property
* refers to items by non-negative integer index
* does **not** have array methods like `forEach` but you can use function `call` method with array-like object as context

You can call these methods for the document, or for a specific element to find only in its sub-tree of descendants.

```js
var itemsInDocument = document.getElementsByTagName('li');

var todos = document.getElementById('todos');
var itemsInTodoList = todos.getElementsByTagName('li');
```

The collection automatically updates when the document changes.

```js
var todos = document.getElementById('todos');
var itemsUncompleted = todos.getElementsByClassName('uncompleted');

var elementCount = document.getElementById('count');

// Display current count of uncompleted items after it might have changed.
function updateCount() {
  elementCount.innerHTML = itemsUncompleted.length;
}
```

[querySelector](https://developer.mozilla.org/en-US/docs/Web/API/Element/querySelector) returns the first element object that matches the selector, or `null` if no elements match.

[querySelectorAll](https://developer.mozilla.org/en-US/docs/Web/API/Element/querySelectorAll) returns a [NodeList](https://developer.mozilla.org/en-US/docs/Web/API/NodeList) which is an array-like object.

The list does not update when the document changes.

## Add listeners

An “unobtrusive JavaScript” application adds event listeners so people can interact with it.

```js
var todo = document.getElementById('todo');
var items = todoList.getElementsByTagName('li');

Array.prototype.forEach.call(items, function (item) {
  item.addEventListener('click', function (event) {
    // Because the “target” element is a property of the event object,
    // you might not need to bind the callback function to a context.
    console.log(event.target.textContent);
  });
});
```

* [click](https://developer.mozilla.org/en-US/docs/Web/Events/click) when the pointing device button is pressed and released.

* [change](https://developer.mozilla.org/en-US/docs/Web/Events/change) when the value changes in a input, select, or testarea element.

## Do things

* [document.createElement(tagName)](https://developer.mozilla.org/en-US/docs/Web/API/Document/createElement) returns a HTML element with the tag name (for example, 'li' for a list item).

* [Node.appendChild(node)](https://developer.mozilla.org/en-US/docs/Web/API/Node/appendChild) appends a node (especially element, text, comment) to the end of children of the parent node. It is like the `Array.push` method.

* [Element.setAttribute(name, value)](https://developer.mozilla.org/en-US/docs/Web/API/Element/setAttribute) sets the attribute with the name to the value.

* [Element.innerHTML](https://developer.mozilla.org/en-US/docs/Web/API/Element/innerHTML) represents the HTML syntax for the descendants of the element.

* [Element.className](https://developer.mozilla.org/en-US/docs/Web/API/Element/className) represents the class attribute.

## Challenge 1

In the `challenge_1` directory:

1. Copy `todos_incomplete.js` to `todos.js` so you can edit and push to your forked repository.
2. In `todos.js` find all `/* comments */` and replace with DOM methods to **render** the application from data. Use `03_getElementByClassName.html` as your pattern for HTML elements, attributes, and text. Build from the content outward, also known as from the bottom of the tree up to the root.
    * `renderList` creates the `ul` and `li` elements.
    * `renderHeading` creates the `h3` and `span` elements.
    * `renderSection` creates the `section` element.
    * `renderApp` “mounts” the `section` in the DOM, and then updates the count of uncompleted items.
3. Open `todos.html` in a Web browser.

## Challenge 2

In the `challenge_2` directory:

1. Copy `todos_incomplete.js` to `todos.js` so you can edit and push to your forked repository.
2. In `todos.js` find all `/* comments */` and replace with DOM methods to make the application **interact**:
    * Click an item to “toggle” it between uncompleted and completed states.
    * Click a filter option to display all, uncompleted, or completed items.
3. Open `todos.html` in a Web browser.

## Challenge 3

In the `challenge_3` directory:

1. Copy `todos_incomplete.js` to `todos.js` so you can edit and push to your forked repository.
2. In `todos.js` find all `/* comments */` and replace with DOM methods to make the application **interact**:
    * Type the text of a new item in the box, and then click Add.
3. Open `todos.html` in a Web browser.
