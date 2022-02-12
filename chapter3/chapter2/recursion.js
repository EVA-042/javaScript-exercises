/*
chapter two,problem two
7/17/2021
Joel Woodsmall
  create a boolean recursive funtion that checks if an imput is even.
then attempt to factor in negative numbers.
*/

function isEven(numba){
  numba = Math.abs(numba);// handles negative values.
  if(numba == 0){
    return true;
  }
  else if(numba == 1){
    return false;
  }
  else {
    return isEven(numba - 2);
  }

}
console.log(isEven(50));
console.log(isEven(75));
console.log(isEven(-1));
