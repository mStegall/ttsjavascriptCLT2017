var course = {
  name: 'JavaScript Application Development',
  learners: ['id1', 'id2', 'id3', 'id4', 'id5'],
  teachers: ['id6', 'id7'],
};
var people = {
  id1: {
    name: 'Bart De Nef',
  },
  id2: {
    name: 'David Conlin',
    type: 'Linux',
  },
  id3: {
    name: 'Ericka Henderson',
  },
  id4: {
    name: 'Kelvin Carter',
  },
  id5: {
    name: 'Ruben Cobos',
  },
  id6: {
    name: 'Matt Stegall',
  },
  id7: {
    name: 'Mark Pedrotti',
  },
};

console.log(people[course.learners[0]].name);
console.log(people[course.learners[1]].name);
console.log(people[course.learners[2]].name);
console.log(people[course.learners[3]].name);
console.log(people[course.learners[4]].name);
console.log(people[course.teachers[0]].name);
console.log(people[course.teachers[1]].name);

// Team challenge:
// Replace the preceding log statements with 2 for loops

// Homework exercise:
// Complete the following for loop to set the index of the item in learners
// whose people object has name property with value of name variable

/*
var name = 'Your Name';
var index = -1;
for () {
  if () {
    index = i;
    break;
  }
}
console.log(name, index, course.learners[index]);
*/
