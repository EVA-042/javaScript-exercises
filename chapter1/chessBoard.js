/*
chapter one, problem three
7/17/21
Joel Woodsmall
  create a string that represents an 8x8 chess board using spaces and # which
can be returned y one console log
*/


//declaring the blank board and an size parameter.
//the flag var is designed to contol which substing is apended.
var chessBoard = '';
var size = 8;
var flag = true;


//below are two for loops that consruct the chessBoard string based on size var
for(var l = 0; l < size; l++){
  for(var w = 0; w < size; w++){
    if(flag){
      chessBoard = chessBoard + '#';
      flag = false;
    }
    else {
      chessBoard = chessBoard +' ';
      flag = true;
    }
  }
  //after a row is compleated we must add a newline and offset the pattern
  chessBoard = chessBoard + '\n';
  flag = !flag;
}
console.log(chessBoard);
