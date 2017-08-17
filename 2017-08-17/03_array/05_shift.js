var learners = [
  'Undefined Null',
  'Bart De Nef',
  'David Conlin',
  'Ericka Henderson',
  'Kelvin Carter',
  'Ruben Cobos',
];
  
console.log('array before shift:          ', learners);

var shifted = learners.shift();

console.log('shift returns the first item:', shifted);
console.log('array after shift:           ', learners);
console.log('array length property:       ', learners.length);
