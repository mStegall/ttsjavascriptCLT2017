var learners = [
  'Bart De Nef',
  'David Conlin',
  'Ericka Henderson',
  'Kelvin Carter',
  'Ruben Cobos',
  'Dale Earnhardt, Jr.'
];

console.log('array:      ', learners);

var joined = learners.join(', ');
var split = joined.split(', ');

console.log("join(', ')  ", joined);
console.log("split(', ') ", split); // Uh, oh,
// when I assume, I make an ass of you and me!