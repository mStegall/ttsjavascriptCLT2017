var course = {
  teachers: [
    'Matt Stegall',
    'Mark Pedrotti',
  ],
};
console.log('name     before:', course.name);
console.log('teachers before:', course.teachers);

course.name = 'JavaScript Application Development';
delete course.teachers;
console.log('name     after: ', course.name);
console.log('teachers after: ', course.teachers);

// Team challenge:

// Add a property to course with key: learners
// What do you think is a reasonable initial value of the property?

// Add an object to learners for every member of your team:
// Each object has properties: name and type (of computer)
