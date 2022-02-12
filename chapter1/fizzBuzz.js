/*
chapter one, problem two
7/17/21
Joel Woodsmall
  In between 1 and 100, replace multiples of three with Fizz and
the multiples of five with Buzz. after succesfully finishing the above,
for values that fall under both stipulations replace with FizzBuzz
*/

for(var i = 1; i <= 100; i++){
  if(i % 3 == 0 && i % 5 == 0){
    //checking for both cases
    console.log('FizzBuzz');
  }
  else if (i % 3 == 0) {
    //checking if divisible by 3 only
    console.log('Fizz');
  }
  else if (i % 5 == 0) {
    //checking if divisible by 5 only
    console.log('Buzz');
  }
  else {
    //if divisible by neither
    console.log(i);
  }
}
