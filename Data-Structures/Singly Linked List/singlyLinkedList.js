// Singly Linked Lists

//Ordered list of data with no indicies
//Contains Head, Tail, and length property
//Consists of nodes. Each node has a value and a pointer to another node or null if its the last node
//Random access is not allowed

//Define a node
//Stores a piece of data: val
//Reference to the next node

//Push method
//Accept a value
//Create a new node
//If there is no head property on the list, setthe head and tail to the new node
//Otherwise se the next propert on the tail to the the new node and set the tail property on the list to be the newly created node

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  //Add to the end of list
  push(val) {
    const newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  //delete item off end of list
  pop() {
    if (!this.head) return undefined;
    let current = this.head;
    let newTail = current;
    while (current.next) {
      newTail = current;
      current = current.next;
    }
    this.tail = newTail;
    this.tail.next = null;
    this.length--;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return current;
  }

  //Delete from begining of list
  shift() {
    //If no head, return undefined
    if (!this.head) return undefined;
    //initiate a variable called temp and set it equal to head property
    let temp = this.head;
    //set head property to be current heads next(which is the next node)
    this.head = this.head.next;
    //decrement by 1
    this.length--;
    //if size is zero, set tail to null (head will already be null by this point)
    if (this.length === 0) this.tail = null;
    return temp;
  }

  //Add to begining of list
  unshift(data) {
    //create new node
    const newNode = new Node(data);
    if (!this.head) {
      this.head = this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }

  get(idx) {
    //function should accept an index
    //If index is less that zero or greater than or equal to the lenght of list, return null
    //loop through list until you reach the index and return node at that specific index, use a coutner var
    let count = 0;
    let current = this.head;
    if (idx < 0 || idx >= this.length) return null;

    while (count !== idx) {
      current = current.next;
      count++;
    }
    return current;
  }
}

const list = new SinglyLinkedList();

list.push('Hello');
list.push('Goodbye');
list.push('!');
list.unshift('before I say this!');

console.log(list.get(0));
