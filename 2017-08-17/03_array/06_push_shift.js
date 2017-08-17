var learners = [];
console.log('array before push: ', learners);

learners.push('Array Object'); // first in
console.log('array after push 1:', learners);

learners.push('Undefined Null');
console.log('array after push 2:', learners);

var shifted = learners.shift(); // first out
console.log('shifted item:      ', shifted);
console.log('array after shift: ', learners);