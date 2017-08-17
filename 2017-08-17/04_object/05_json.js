var course = {
  name: 'JavaScript Application Development',
  learners: [
    'Bart De Nef',
    'David Conlin',
    'Ericka Henderson',
    'Kelvin Carter',
    'Ruben Cobos',
  ],
  teachers: [
    'Matt Stegall',
    'Mark Pedrotti',
  ],
};

var stringified = JSON.stringify(course);
var parsed = JSON.parse(stringified);
console.log('original object:   ', course);
console.log('stringified object:', stringified);
console.log('parsed object:     ', parsed);