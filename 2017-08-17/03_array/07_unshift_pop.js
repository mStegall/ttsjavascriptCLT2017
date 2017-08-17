var learners = [];
console.log('array before unshift: ', learners);

learners.unshift('Undefined Null'); // first in
console.log('array after unshift 1:', learners);

learners.unshift('Array Object');
console.log('array after unshift 2:', learners);

var popped = learners.pop(); // first out
console.log('popped item:          ', popped);
console.log('array after pop:      ', learners);
