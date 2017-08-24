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

var i = people.findIndex(function (person) {
  return person.firstName === 'Mark'; // closure includes argument person
});
console.log(i, people[i].firstName, people[i].lastName, people[i].githubName);
