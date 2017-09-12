# Lesson 9: jQuery

> Write less, do more.
> Find something, do something.

```js
// Find the root element, and then set its text.
jQuery('#root').text('Hello, jQuery!');
```

1. Go to [http://jquery.com/download/](http://jquery.com/download/)
2. Save the link for **compressed production jQuery 3.2.1** as `jquery.js` to your `2017-09-12` directory
3. Open `01_hello_jquery.html` in a Web browser

## jQuery object

The `jQuery` or `$` function is a virtual constructor. The **type** of argument determines **what** it does:

* `$(selectorString)` **finds** elements: `$('#root')` or `$('li')` or `$('.completed')`
* `$(markupString)` **creates** elements: `$('<li></li>')` or `$('<input type="text"/>')`
* `$(element)` **wraps** a DOM element: `$(event.target)` or `$(this)`

It always returns an [array-like object](https://learn.jquery.com/using-jquery-core/jquery-object/) that **wraps** a collection of DOM elements:

* It has `length` property
* It refers to items by integer index
* To use array methods, remember the `call` method with jQuery object as **context** argument and **callback** function as second argument
* Unlike `HTMLCollection` and like `NodeList`, it doesn’t update automatically when content of the document changes
* Unlike `HTMLCollection` or `NodeList`, it has an intuitive [API](http://api.jquery.com/) with many methods:
  * [manipulation](http://api.jquery.com/category/manipulation/)
  * [events](http://api.jquery.com/category/events/)
  * [traversing](http://api.jquery.com/category/traversing/)

## Selectors: find something

Most of the [selectors](http://api.jquery.com/category/selectors/) are from CSS.

Because a collection can contain zero, one, or more elements, you don’t need to choose which function to call as you do with [querySelector](https://developer.mozilla.org/en-US/docs/Web/API/Element/querySelector) and [querySelectorAll](https://developer.mozilla.org/en-US/docs/Web/API/Element/querySelectorAll) functions.

I usually precede variable names with `$` to distinguish jQuery objects from:

* JavaScript arrays
* instances of `HTMLCollection` or `NodeList`.

```js
var $itemsInDocument = $('li');

var $itemsInTodoList = $('#todos li'); // or $('#todos').find('li')
```

## Manipulation: do something, part 1

For many jQuery methods:

* a “get” call returns the **value**
* a “set” call changes the value according to an additional argument and returns the **object** so you can apply the **chaining** pattern

[text](http://api.jquery.com/text/)

* get the text content: `var text = jQuery('#root').text();`
* set the text content: `jQuery('#root').text('Hello, jQuery!');`

[class attribute](http://api.jquery.com/category/manipulation/class-attribute/)
* [hasClass](http://api.jquery.com/hasClass/) `$item.hasClass('completed'))`
* [addClass](http://api.jquery.com/addClass/) `$items.addClass('completed')`
* [removeClass](http://api.jquery.com/removeClass/) `$items.removeClass('completed')`
* [toggleClass](http://api.jquery.com/toggleClass/) `$item.toggleClass('completed', completed);`

Open in a Web browser:

1. `02_has_class.html`
2. `03_set_class.html`

## Overview of todos application for challenges

Here are a few differences from the last class:

We separate the application into **state** (data) and **interface** (HTML and JavaScript).

* `state.js` defines a JavaScript class for data and “business logic”
* `interface.js` creates elements, and then adds callback functions to respond to events

To avoid “leaking” private functions, the `renderTodos` function is **encapsulated** in an immediately-invoked function expression, also known as IIFE:

```js
var renderTodos = (function (){
  // declare private functions
  // …

  // return the public function
  return function (stateInitial) {
    // …
  };
}());
```

We also separate the **initialization** into a separate file:

* `root.js` mounts the application after the DOM is ready

## Challenge 1

In the `challenge_1` directory:

1. Copy `interface_incomplete.js` to `interface.js` so you can edit and push to your forked repository

2. In `interface.js` find all `/* comments */` and replace with jQuery methods to **render** the interface according to the data
    * `renderHeading` creates the `h3` element
    * `renderList` creates the `ul` and `li` elements

3. Open `todos.html` in a Web browser

## Manipulation: do something, part 2

[attr](http://api.jquery.com/attr/)

* get the value of an attribute: `var name = $input.attr('name');`
* set the value of an attribute: `$input.attr('name', name);`
* set multiple attributes: `$input.attr({type: 'radio', name: name, value: value});`

[append](http://api.jquery.com/append/) arguments to the end of each element in the collection

```js
function renderFilter() {
  var name = 'filter';

  return $('<form name=></form>')
    .attr('name', name)
    .append(
      renderFilterOption(name, 'all', true),
      renderFilterOption(name, 'uncompleted', false),
      renderFilterOption(name, 'completed', false)
    );
}
```

Open `04_attr_append.html` in a Web browser

[prepend](http://api.jquery.com/prepend/) arguments to the beginning of each element in the collection

```js
function renderFilterOption(name, value, checked) {
  var $input = …;

  return $('<label></label>').text(value).prepend($input);
}
```

## Challenge 2

In the `challenge_2` directory:

1. Copy `interface_incomplete.js` to `interface.js`
2. In `interface.js` find all `/* comments */` and replace with jQuery methods to **render** the application from data
    * `renderFilterOption` creates `input` elements for “radio buttons”
    * `renderAdder` creates `input` and `button` elements in the `form` to add new items
3. Open `todos.html` in a Web browser

## Events

jQuery normalizes the [event object](http://api.jquery.com/category/events/event-object/) according to W3C standards.

* [on](http://api.jquery.com/on/) is similar to the `addEventListener` method
* [data](http://api.jquery.com/data/) on elements is similar to [data attributes](https://developer.mozilla.org/en-US/docs/Learn/HTML/Howto/Use_data_attributes) as an alternative to binding callback functions
  * get value of data: `var value = $li.data('id')`
  * set value of data: `$li.data('id', value);`

Open `05_on_change.html` in a Web browser

## Challenge 3

In the `challenge_3` directory:

1. Copy `interface_incomplete.js` to `interface.js`
2. In `interface.js` find all `/* comments */` and replace with jQuery methods to make the application **interact**
    * Click an item to “toggle” it between uncompleted and completed states.
      Notice that `clickItemCallback` calls `state.toggleTodo` in `state.js`
    * Click a filter option to display all, uncompleted, or completed items.
      Notice that `changeFilterCallback` calls `state.changeFilter` in `state.js`
3. Open `todos.html` in a Web browser

The following `update` function:

* Maximizes correctness and minimizes efficiency: after any interaction which changes the state of the application, it **replaces everything** in the user interface which might change.
* Is not the usual way to update the interface in a DOM or jQuery application.
* Is an oversimplified version of the way that React updates the interface, except that React maximizes correctness and efficiency **doesn’t replace** any elements, attributes, and text that didn’t change.

```js
function update() {
  var $headingNext = renderHeading(state);
  $heading.replaceWith($headingNext);
  $heading = $headingNext;

  var $listNext = renderList(clickItemCallback, state);
  $list.replaceWith($listNext);
  $list = $listNext;
}
```

[replaceWith](http://api.jquery.com/replaceWith/) Replace each element in the set of matched elements with the provided new content and return the set of elements that was removed.

## Challenge 4

In the `challenge_4` directory:

1. Copy `interface_incomplete.js` to `interface.js`
2. In `interface.js` find all `/* comments */` and replace with jQuery methods to make the application **interact**
    * Type the text of a new item in the box, and then click Add.
      Notice that `addItemCallback` calls `state.addTodo` in `state.js`
3. Open `todos.html` in a Web browser

## Challenge 5

To lean toward JSX notation in React, here is a similar ECMAScript 2015 feature: **template literals**

* enclosed in backticks
* can contain single or double quote marks
* can contain multiple lines
* can contain substitutions: any valid JavaScript expression enclosed in `${}`

You can replace some jQuery methods:

```js
var name = 'filter';
var $form $('<form></form>').attr('name', name);
```

with template literals:

```js
var name = 'filter';
var $form = $(`<form name="${name}"></form>`);
```

In the `challenge_5` directory:

1. Copy `interface_incomplete.js` to `interface.js`
2. In `interface.js` find all `/* comments */` and replace jQuery methods with **template literals**
    * `input` and `label` elements in `renderFilterOption`
    * `input` and `button` elements in `renderAdder`
3. Open `todos.html` in a Web browser

Find all `/* comments */` and replace jQuery methods with template literals.

## Homework

Read:

* [How jQuery Works](https://learn.jquery.com/about-jquery/how-jquery-works/)
* [The jQuery Object](https://learn.jquery.com/using-jquery-core/jquery-object/)
* [$( document ).ready()](https://learn.jquery.com/using-jquery-core/document-ready/)

To prepare for the next class, read a page about [Ajax](https://learn.jquery.com/ajax/) which has 5 links to child pages.

Read at least 3 other pages of your choice from [jQuery Learning Center](https://learn.jquery.com/)
