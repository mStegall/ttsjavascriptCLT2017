function Element(nodeName, attributes) {
  this.nodeType = 1;
  this.nodeName = nodeName.toUpperCase();
  this.attributes = attributes;

  var childNodes = this.childNodes = [];
  for (let i = 2; i < arguments.length; i += 1) {
    childNodes.push(arguments[i]);
  }
}

function serialize(element) {
  // We will improve this in the next challenge :)
  if (typeof element === 'string') {
    return element;
  }

  var tag = element.nodeName; /* can you guess now convert it to lower case? */
  var attributes = element.attributes.map(function (attribute) {
    return ' '; /* + what else? */
  }).join('');
  var children = element.childNodes.map(function (childNode) {
    return serialize(childNode);
  }).join('');
  return '<' + tag + attributes + '>' + children + '</' + tag + '>';
}

var element = new Element(
  'section',
  [{name: 'id', value: 'challenge-3'}],
  new Element('h2', [], 'Challenge 3'),
  new Element('p', [], 'Write function to serialize')
);

console.log(serialize(element));
// <section id="challenge-3"><h2>Challenge 3</h2><p>Write function to serialize</p></section>
