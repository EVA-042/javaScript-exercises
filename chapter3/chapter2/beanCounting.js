/*
chapter two,problem three
7/17/2021
Joel Woodsmall
  create two functions, one for counting the number of "B"s and countChars which
takes two arguements, a string and a letter
*/

function countBs(string){
  return countChars(string, 'B');
}
function countChars(string, char){
  var count = 0;

  for(var i = 0; i < string.length; i ++){
    if(string[i] == char){
      count++;
    }
  }
  return count;
}

console.log(countBs('BadBitchesBoneBarvesters'))
