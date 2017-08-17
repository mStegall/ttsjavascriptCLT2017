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

console.log('typeof course:   ', typeof course);
console.log('typeof learners: ', typeof course.learners);
console.log('typeof teachers: ', typeof course.teachers);
console.log('isArray(course)  ', Array.isArray(course));
console.log('isArray(learners)', Array.isArray(course.learners));
console.log('isArray(teachers)', Array.isArray(course.teachers));

// Individual challenge:
// log the type of the name property
