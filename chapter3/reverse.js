/*
chapter three, problem two
7/22/21
Joel Woodsmall
  reverse an array. use two methods, one that takes an a aray and produces a new
array in the inverswe order, and one that modifies an array without creating a
new array.
*/
function reverseArray(input){
  var output = [];
  var stop = input.length;
  for(var i = 0; i < stop ; i++ ){
    output[i] = input.pop();
  }
  return output;
}

function reverseInPlace(array){
  //for half the size of the array (rounded down) grab the i element of the
  //array and insert the value into a variable, then insert the length - 1 - i
  //into the i index. Then insert the temp variable into length - 1 - i & repeat
  for(var i = 0; i <= Math.floor((array.length - 1 )/ 2); i++){
    var item = array[i];
    array[i] = array[array.length - 1 - i];
    array[array.length - 1 - i] = item;
  }
  return array;
}
console.log(reverseArray([1 , 2 , 3 , 4]));
console.log(reverseInPlace([1 , 2 , 3 , 4]));
