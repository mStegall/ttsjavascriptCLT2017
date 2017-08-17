var learners = [
  'Bart De Nef',
  'David Conlin',
  'Ericka Henderson',
  'Kelvin Carter',
  'Ruben Cobos',
];
  
console.log('array before push:          ', learners);

var pushed = learners.push('Undefined Null');

console.log('push returns the new length:', pushed);
console.log('same as new length property:', learners.length);
console.log('array after push:           ', learners);