var array = ['zero', 'one', 'two', 'three'];

console.log('array before slice:', array);

// from the start index
// to (but not including) the end index
// if omitted, the end index is the array length
var start = 1;
var end = 3;
var sliced = array.slice(start, end);

console.log(`array.slice(${start}, ${end}): `, sliced);
console.log('array after slice: ', array);

console.log('length of slice:   ', end - start);
console.log('length of array:   ', array.length);

// Individual challenge
// Set various values of start and end to make sure you understand slice
// Experiment with small negative numbers to make a hypothesis what they mean