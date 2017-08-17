var bart = {name: 'Bart De Nef'};
var david = {name: 'David Conlin'};
var ericka = {name: 'Ericka Henderson'};
var kelvin = {name: 'Kelvin Carter'};
var ruben = {name: 'Ruben Cobos'};
var unull = {name: 'Undefined Null'};

var learners = [bart, david, ericka, kelvin, ruben, unull];

// Replace your variable and name below:
console.log(learners.indexOf(unull));
console.log(learners.indexOf({name: 'Undefined Null'}));

// Team challenge:
// Complete the following for loop to set the index of the item
// whose object has name property with value of name variable

/*
var name = 'Undefined Null'; // Test your name too :)
var index = -1;
for () {
  if () {
    index = i;
    break;
  }
}
console.log(name, index, course.learners[index]);
*/
