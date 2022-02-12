/*
chapter two,problem one
7/17/2021
Joel Woodsmall
  create a minimum function that will return the lower of two arguments.
*/

//  requirements were vauge so i assumed that the grtr than and less than were
// avalible and i left the standard string functionality of letter by leter a-z
function min(arg1,arg2){
  if( arg1 > arg2){
    return arg2;
  }
  else if(arg1 < arg2){
    return arg1;
  }
  else {
    return null;
  }
}

console.log(min(500,600));
console.log(min('apples','bananna'));
console.log(min(.30,.40));
console.log(min('aorz','more'));
console.log(min(500,500));
