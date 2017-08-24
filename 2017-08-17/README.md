# Lesson 2: Data Structures

## Analogies

If you think of text nodes in HTML as an analogy to primary types in JavaScript, then markup structures like lists in HTML are an analogy to data structures like arrays or objects in JavaScript.

### HTML list to JavaScript array

```html
<h2>Learners</h2>

<ol>
  <li>Bart De Nef</li>
  <li>David Conlin</li>
  <li>Ericka Henderson</li>
  <li>Kelvin Carter</li>
  <li>Ruben Cobos</li>
</ol>

<ul>
  <li>Bart De Nef</li>
  <li>David Conlin</li>
  <li>Ericka Henderson</li>
  <li>Kelvin Carter</li>
  <li>Ruben Cobos</li>
</ul>
```

Just as a list in HTML consists of items in an order, whether or not the order is significant, so also for an array in JavaScript.

```js
var learners = [
  'Bart De Nef',
  'David Conlin',
  'Ericka Henderson',
  'Kelvin Carter',
  'Ruben Cobos',
];
```

### HTML definition list to JavaScript object

```html
<h2>Person</h2>

<dl>
  <dt>firstName</dt>
  <dd>Mark</dd>
  <dt>lastName</dt>
  <dd>Pedrotti</dd>
  <dt>githubName</dt>
  <dd>pedrottimark</dd>
</dl>
```

```js
var person = {
  firstName: 'Mark',
  lastName: 'Pedrotti',
  githubName: 'pedrottimark',
};
```

### HTML table to JavaScript array of objects

```html
<table>
  <caption>names of learners</caption>
  <thead>
    <tr>
      <th scope="col">index</th>
      <th scope="col">first name</th>
      <th scope="col">last name</th>
      <th scope="col">GitHub name</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">0</th>
      <td>Bart</td>
      <td>De Nef</td>
      <td></td>
    </tr>
    <tr>
      <th scope="row">1</th>
      <td>David</td>
      <td>Conlin</td>
      <td>daveconlin</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Ericka</td>
      <td>Henderson</td>
      <td>erickaeast</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>Kelvin</td>
      <td>Carter</td>
      <td>onekeymaster</td>
    </tr>
    <tr>
      <th scope="row"></th>
      <td>Ruben</td>
      <td>Cobos</td>
      <td>kohbos</td>
    </tr>
  </tbody>
</table>
```

```js
var namesOfLearners = [
  {
    firstName: 'Bart',
    lastName: 'De Nef',
  },
  {
    firstName: 'David',
    lastName: 'Conlin',
    githubName: 'daveconlin',
  },
  {
    firstName: 'Ericka',
    lastName: 'Henderson',
    githubName: 'erickaeast',
  },
  {
    firstName: 'Kelvin',
    lastName: 'Carter',
    githubName: 'onekeymaster',
  },
  {
    firstName: 'Ruben',
    lastName: 'Cobos',
    githubName: 'kohbos',
  },
];
```

### CSS style to JavaScript object

An even closer analogy is style properties in CSS:

```css
table {
  border-collapse: collapse;
  border-spacing: 0;
  width: 100%;
}
```

For which some developers use style objects in React:

```js
var style = {
  borderCollapse: 'collapse',
  borderSpacing: 0,
  width: '100%',
}
```

### Node in Document Object Model (DOM)

The original purpose of JavaScript objects was to interact with markup:

```html
<div id="root"><p>JavaScript Application Development</p><!--are you having fun yet?--></div>
```

Here is a simplified representation as objects and arrays:

```js
var root = {
  nodeType: 1,
  nodeName: 'DIV',
  attributes: [
    {
      name: 'id',
      value: 'root',
    },
  ],
  childNodes: [
    {
      nodeType: 1,
      nodeName: 'P',
      attributes: [],
      childNodes: [
        {
          nodeType: 3,
          data: 'JavaScript Application Development',
        },
      ],
    },
    {
      nodeType: 8,
      data: 'are we having fun yet?',
    },
  ],
}
```

## Links

### For previous and current lesson

* [Grammar and types at Mozilla Developer Network](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Grammar_and_types)
* [Array at Mozilla Developer Network](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)
* [JSON Introduction at w3schools.com](https://www.w3schools.com/js/js_json_intro.asp)

### For your future on-the-job learning

* [Learn ES2015 at babeljs.io](https://babeljs.io/learn-es2015/)
* [Understanding ECMAScript 6 at leanpub.com](https://leanpub.com/understandinges6)
* [JavaScript books by Dr. Axel Rauschmayer](http://exploringjs.com/)
