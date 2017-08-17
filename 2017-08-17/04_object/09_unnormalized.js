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

console.log(course.learners[0].name);
console.log(course.learners[1].name);
console.log(course.learners[2].name);
console.log(course.learners[3].name);
console.log(course.learners[4].name);
console.log(course.teachers[0].name);
console.log(course.teachers[1].name);
