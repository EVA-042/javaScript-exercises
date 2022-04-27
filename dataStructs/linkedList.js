//https://www.geeksforgeeks.org/implementation-linkedlist-javascript/
class LinkedList {
    constructor(head = null)
    {
      this.head = head;
    }

    // functions to be implemented

    // add(element)
    // insertAt(element, location)
    // removeFrom(location)
    // removeElement(element)


    add(element)
    {
      let node = new Node(element);
      node.next = head;

      head = node;

    }

    insertAt(element, location)
    {
      if (location == null){
       console.log("The intended destination cannot be null");
       return;
      }
      let node = new Node(element);
      node.next = location.next;
      location.next = node;


    }

    removeFrom(location)
    {
      if (location == null){
       console.log("The intended destination cannot be null");
       return;
      }
      let tmp = head;

      if (location == 0){
        head = location.next;
        return;
      }

      for( i = 0; tmp != null && location - 1; i++){
        tmp = tmp.next;
      }
      if (tmp == null || tmp.next == null ){
        return;
      }
      let next = tmp.next.next;
      tmp.next = next;
    }

    removeElement(element)
    {
      let tmp = head, prev = null;

      if (tmp != null && tmp.element == element){
        head = tmp.next;
        return;
      }
      while (tmp != null && tmp.data != key){
        prev = tmp;
        tmp = tmp.next;
      }
      if (tmp == null){
        return;
      }
      prev.next = tmp.next;
    }

    // Helper Methods

    // isEmpty
    // size_Of_List
    // PrintList

    sizeOfList()
    {
      let count = 0;
      let node = this.head;
       while (node) {
         count++;
         code = node.next;
       }
    }
    clear()
    {
      this.head = null;
    }

    getLast()
    {
      let lastNode = this.head;
      if (lastNode) {
        while (lastNode.next){
          lastNode = lastNode.next;
        }
      }
    }
    getFirst()
    {
      return this.head;
    }
}
