var learners = [
  'Bart De Nef',
  'David Conlin',
  'Ericka Henderson',
  'Kelvin Carter',
  'Ruben Cobos',
];
  
console.log('array before unshift:          ', learners);

var unshifted = learners.unshift('Undefined Null');

console.log('unshift returns the new length:', unshifted);
console.log('array after unshift:           ', learners);
