function Text(data) {
  this.nodeType = 3;
  this.data = data;
}

/*
Text.prototype.nodeType = // move assignment from constructor
Text.prototype.serialize = function () {
  return // WHAT?
}
*/

function Comment(data) {
  this.nodeType = 8;
  this.data = data;
}

/*
Comment.prototype.nodeType = // move assignment from constructor
Comment.prototype.serialize = function () {
  return // WHAT?
}
*/

function Element(nodeName, attributes) {
  this.nodeType = 1;
  this.nodeName = nodeName.toUpperCase();
  this.attributes = attributes;

  var childNodes = this.childNodes = [];
  for (let i = 2; i < arguments.length; i += 1) {
    childNodes.push(arguments[i]);
  }
}

/*
Element.prototype.nodeType = // move assignment from constructor
Element.prototype.serialize = function () {
  // Move body of the following function here.
  // Replace occurrences of element argument with `this`
  // Tricky part:
  // Replace `serialize(childNode)` with `childNode.serialize()`
}
*/

function serialize(element) {
  // We will improve this now!
  if (element.hasOwnProperty('data')) {
    return element.data;
  }

  var tag = element.nodeName.toLowerCase();
  var attributes = element.attributes.map(function (attribute) {
    return ' ' + attribute.name + '="' + attribute.value + '"';
  }).join('');
  var children = element.childNodes.map(function (childNode) {
    return serialize(childNode);
  }).join('');
  return '<' + tag + attributes + '>' + children + '</' + tag + '>';
}

var element = new Element(
  'section',
  [{name: 'id', value: 'challenge-4'}],
  new Element('h2', [], new Text('Challenge 4')),
  new Element('p', [], new Text('Rewrite as prototype properties')),
  new Comment('Are we having fun yet?')
);

console.log(serialize(element));
/*
Replace with the preceding statement with:
comment.log(element.serialize());
*/
// <section id="challenge-4"><h2>Challenge 4</h2><p>Rewrite as prototype properties</p><!--Are we having fun yet?--></section>
