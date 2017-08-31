function addItem(items, item) {
  items.push(item);
}

var items = [];
console.log('before:', JSON.stringify(items));

// You can develop and test a function separate from data that it updates.
addItem(items, {
  text: 'Develop event-oriented applications',
  completed: false,
});

console.log('after: ', JSON.stringify(items));
