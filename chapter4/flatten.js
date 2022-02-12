/*
chapter four, problem one
10/8/2021
Joel Woodsmall
Use the reduce method in combination with the concat method to “flatten” an array
of arrays into a single array that has all the elements of the original arrays
*/

const array = [[1,2,3],[5,6],[7]];
const reduction = (initialValue, currentValue) => initialValue.concat(currentValue);

console.log(array.reduce(reduction));
