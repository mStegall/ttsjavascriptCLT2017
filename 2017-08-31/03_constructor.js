function TodoList(items) {
  this.items = items;
  this.addItem = function (item) {
    this.items.push(item);
  };
}

var items = []; // imagine this comes as JSON from request to server
var todoList = new TodoList(items);

console.log('before:', JSON.stringify(todoList.items));

// The todoList object “knows” how to update itself.
todoList.addItem({
  text: 'Develop event-oriented applications',
  completed: false,
});

console.log('after: ', JSON.stringify(todoList.items));
