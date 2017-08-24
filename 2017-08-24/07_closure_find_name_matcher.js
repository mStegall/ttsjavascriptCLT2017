var people = [
  {
    firstName: 'Bart',
    lastName: 'De Nef',
  },
  {
    firstName: 'David',
    lastName: 'Conlin',
    githubName: 'daveconlin',
  },
  {
    firstName: 'Ericka',
    lastName: 'Henderson',
    githubName: 'erickaeast',
  },
  {
    firstName: 'Kelvin',
    lastName: 'Carter',
    githubName: 'onekeymaster',
  },
  {
    firstName: 'Ruben',
    lastName: 'Cobos',
    githubName: 'kohbos',
  },
  {
    firstName: 'Mark',
    lastName: 'Pedrotti',
    githubName: 'pedrottimark',
  },
  {
    firstName: 'Matt',
    lastName: 'Stegall',
    githubName: 'mStegall',
  }
];

// Given a name, return a function
// which matches a person object whose name property has that value.
// Matchmaker, matchmaker, make me a matcher, to find me a name :)
function firstNameMatcher(name) {
  return function (person) {
    return person.firstName === name; // closure includes arguments person and name
  };
}

var i = people.findIndex(firstNameMatcher('Mark'));
console.log(i, people[i].firstName, people[i].lastName, people[i].githubName);

i = people.findIndex(firstNameMatcher('Matt'));
console.log(i, people[i].firstName, people[i].lastName, people[i].githubName);
