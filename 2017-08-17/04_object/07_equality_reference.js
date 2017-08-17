var x = {name: 'Mark Pedrotti'}
var y = {name: 'Mark Pedrotti'}
console.log(x === y);

var y = x;
console.log(x === y);

x.name = 'Matt Stegall';
console.log(y.name);