# Array

An array is a specialized object: ordered list of **items** also known as elements

A `length` method gets or sets the current **number of items** which is not fixed

The **type** of items is neither fixed nor need to be same, but often is

Array **literal** notation enclosed in brackets:

```js
var learners = [
  'Bart De Nef',
  'David Conlin',
  'Ericka Henderson',
  'Kelvin Carter',
  'Ruben Cobos',
];
```

What is the value of `learners.length` property?

The key or **index** of items is zero-based integer numbers

Refer to array items by **bracket** notation

What is the value of the following items:
* `learners[1]`
* `learners[0]`
* `learners[4]`
* `learners[5]`

The value of an item that doesn’t exist isn’t an error, but `undefined`

Idiom to access the last item of an array: `learners[learners.length - 1]`