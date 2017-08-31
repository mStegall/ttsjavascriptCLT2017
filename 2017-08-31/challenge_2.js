function Element(nodeName, attributes, childNodes) {
  /* This is where you adapt what you wrote in preceding challenge */
}

var element = getElement(
  'p',
  [{name: 'id', value: 'challenge-2'}],
  ['Write constructor function']
);

console.log(JSON.stringify(element));

/* Improvement:

 * Write a constructor function Text(data) which:
   sets data property of instance from argument
   always sets nodeType property whose value is 3

 * Replace ['Write constructor function']
   with [new Text('Write constructor function')]

 * Write a constructor function Comment(data) which:
   sets data property of instance from arguments
   always sets nodeType property whose value is 8

 */
