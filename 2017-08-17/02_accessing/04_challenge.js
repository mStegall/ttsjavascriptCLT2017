/*
var node = {
  nodeType: 1,
  nodeName: 'P',
};
*/
/*
var node = {
  nodeType: 3,
  data: 'JavaScript Application Development',
};
*/
/*
var node = {
  nodeType: 8,
  data: 'are we having fun yet?',
};
*/
/*
var node = {
  nodeType: 9,
};
*/

// Replace the if-else statements with a switch statement

if (node.nodeType === 1) {
  console.log('element: ' + node.nodeName);
} else if (node.nodeType === 3) {
  console.log('text: ' + node.data);
} else if (node.nodeType === 8) {
  console.log('comment: ' + node.data);
} else {
  console.log('unexpected ' + node.nodeType);
}