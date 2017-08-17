var learners = [
  'Bart De Nef',
  'David Conlin',
  'Ericka Henderson',
  'Kelvin Carter',
  'Ruben Cobos',
];

console.log('array:               ', learners);

learners.forEach(function(item, index) {
  console.log('array item and index:', item, index);
});

learners.forEach(function(item) {
  console.log('array item:          ', item);
});