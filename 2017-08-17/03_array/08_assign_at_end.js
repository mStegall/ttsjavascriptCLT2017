var learners = [
  'Bart De Nef',
  'David Conlin',
  'Ericka Henderson',
  'Kelvin Carter',
  'Ruben Cobos',
];
  
console.log('array before assignment:', learners);
console.log('array length property:  ', learners.length);

learners[learners.length] = 'Undefined Null';

console.log('array after assignment: ', learners);
console.log('array length property:  ', learners.length);