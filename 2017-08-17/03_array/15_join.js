var learners = [
  'Bart De Nef',
  'David Conlin',
  'Ericka Henderson',
  'Kelvin Carter',
  'Ruben Cobos',
];
  
console.log('array:      ', learners);

// More recommended because more flexible to join an array
console.log("join()      ", learners.join());
console.log("join(', ')  ", learners.join(', '));
console.log("join(' ')   ", learners.join(' '));
console.log("join('')    ", learners.join(''));
console.log("join('\\n')\n" + learners.join('\n'));