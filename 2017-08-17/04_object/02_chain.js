var course = {
  name: 'JavaScript Application Development',
  learners: [
    {
      name: 'Bart De Nef',
    },
    {
      name: 'David Conlin',
      type: 'Linux',
    },
    {
      name: 'Ericka Henderson',
    },
    {
      name: 'Kelvin Carter',
    },
    {
      name: 'Ruben Cobos',
    },
  ],
  teachers: [
    {
      name: 'Matt Stegall',
      type: 'Windows',
    },
    {
      name: 'Mark Pedrotti',
      type: 'MacOS',
    },
  ],
};

console.log(course.teachers[1].name, course.teachers[1].type);

// Individual challenge:
// Set the type property for yourself above, and then set your index below.
/*
var index = -1;
var learner = course.learners[index];
console.log(learner.name, learner.type);
*/
