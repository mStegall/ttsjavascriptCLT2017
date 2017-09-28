const propsCompleted = {
  color: 'black',
  textDecoration: 'line-through',
};
const propsUncompleted = {
  color: 'green',
  textDecoration: 'none',
};

// Example of rest parameter in function definition:

// Given an element type, props, and children,
// return a React test object.
const getTestObject = (type, props, ...children) => ({
  type: type,
  props: props,
  children: children,
});

const item0 = getTestObject('li', propsCompleted, 'Write less, do more');
const item1 = getTestObject('li', propsUncompleted, 'Repeat generic patterns');
const item2 = getTestObject('li', propsUncompleted, 'See specific details');

const items = [item0, item1, item2];

// Example of spread parameters in function invocation:

//                         getTestObject('ul', null, item0, item1, item2);
console.log(JSON.stringify(getTestObject('ul', null, ...items), null, 2));
