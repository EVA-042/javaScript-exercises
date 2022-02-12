/*
chapter three, problem three
7/23/21
Joel Woodsmall
  create a list object, an arrayToList function, an listToArray function,
  an prepend function, an nth function(recursive)
*/
class Node {
  constructor(data){
    this.data = data;
    this.next = null;
  }
}

class ListNode {
  constructor() {
    this.head = null; //this is the start of the list
    this.size = 0;
  }

  prepend(data){
    // adds a node to the end of a list
    var node = new Node(data); //creating new Node

    var current; //a variable to store

    if(this.head == null){
      this.head = node;
    }
    else{
      current = this.head;
      while(current.next){
        current = current.next;
      }

      current.next = node;
    }
    this.size++;

  }

  Nth(index, linkedList){
    var currentNode = this.head;
    var position = 0;
    if(currentNode == null){
      return undefined;
    }
    else{
      if(position == index){
        return currentNode.data
      }
      else{
        position++;
        return Nth(index, currentNode.next)//oww brai
      }

    }
  }
  arrayToList(arr){
    for(var i = 0; i < arr.length; i++){
      this.prepend(arr.pop());
    }
  }
  listToArray(list){
    var currentNode = this.head;
    var outArray = [];

    while(currentNode){
      outArray.push(currentNode.data);
      currentNode= currentNode.next

    }


  }


}
