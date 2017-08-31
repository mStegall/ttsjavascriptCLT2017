function addItem(items, item) {
  items.push(item);
}

function newItem(text) {
  return Object.assign(
    {completed: false},
    {text: text}
  );
  // The preceding return statement is equivalent to the following:
  /*
  return {
    completed: false,
    text: text,
  };
  */
}

var items = [];
console.log('before:', JSON.stringify(items));

// You can develop and test a function separate from data that it updates.
addItem(items, newItem('Example of Object.assign'));

console.log('after: ', JSON.stringify(items));
