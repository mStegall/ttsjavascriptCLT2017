var learners = [
  'Array Object',
  'Data Structure',
];
console.log('array before assignment:', learners);

learners[3] = 'Undefined Null';
console.log('array after assignment: ', learners)
console.log('array length property:  ', learners.length);
console.log('item types:             ',
  typeof learners[0],
  typeof learners[1],
  typeof learners[2],
  typeof learners[3],
);