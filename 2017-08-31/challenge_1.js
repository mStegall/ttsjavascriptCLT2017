function getElement(nodeName, attributes, childNodes) {
  return {
    /* This is where you add whatever you think is needed */
  };
}

var element = getElement(
  'P',
  [{name: 'id', value: 'challenge-1'}],
  ['Write function']
);

console.log(JSON.stringify(element));

/* Improvements:

 * Add a nodeType property whose value is 1

 * Use toUpperCase() method in case value of nodeName argument is 'p' instead of 'P'

 * Use arguments so instead of childNodes array,
 * you can call the function with zero or more children as individual arguments:
   getElement(
     'section',
     [{name: 'id', value: 'challenge-1'}],
     getElement('h2', [], 'Challenge 1'),
     getElement('p', [], 'Write function')
   )

 */
