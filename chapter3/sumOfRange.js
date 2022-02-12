/*
chapter three, problem one
7/19/21
Joel Woodsmall
  create a range function form start to end (inclusive), then create a sum
function to sum the range. the range should include a step that can handle
negative integers.
*/
function range(start, end, step){
  var output = []; // the array for storing values.
  var end = end + 1; // modifying the endpoint to be inclusive
  if(arguments.length < 3){ //if no third input is given then step is set to one
    step = 1;
  }
  for(var i = start; i < end; i = i + step){
    /* start at the provide variable,
    end at the modified end variable,
    and increse the step by the given ammout or if one is not provdied
    then increse by one,
    apending all to the output array
    */
    output.push(i);
  }
  return output;

}
function sum(input){
  var output = 0;
  for(var i = 0; i < input.length; i++){
    output = output + input[i];
  }
  return output;
}
console.log(range(3,9,3));
console.log(range(3,9));
console.log(sum(range(1,10)));
