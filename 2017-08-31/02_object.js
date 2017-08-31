var todoList = {
  items: [], // data
  addItem: function (item) {
    this.items.push(item);
  }, // method
};

console.log('before:', JSON.stringify(todoList.items));

// The todoList object “knows” how to update itself.
todoList.addItem({
  text: 'Develop event-oriented applications',
  completed: false,
});

console.log('after: ', JSON.stringify(todoList.items));
