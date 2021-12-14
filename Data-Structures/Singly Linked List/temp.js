class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  //Add to end of list
  push(data) {
    const newNode = new Node(data);
    if (!this.head) {
      this.head = this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  //delete from end of list
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
      this.head.this.tail = null;
    }
  }

  //Delete from begining of list
  shift() {
    if (!this.head) return undefined;
    let temp = this.head;
    this.head = this.head.next;
    this.length--;
    if (this.length === 0) {
      this.tail = null;
    }
    return temp;
  }

  //Add to beginning of list
  unshift(data) {
    const newNode = new Node(data);
    if (!this.head) this.head = this.tail = newNode;
  }
}

const list = new SinglyLinkedList();

list.push('This');
list.push('involves');
list.push('removing');
list.push('the');
list.push('first');
list.push('node');
list.push('in');
list.push('the');
list.push('list');
list.shift();
console.log(list);

/*
Push Method

1. Create new node
2. If no head (meaning the list is empty) said head to new node and set tail to the same
3. Else set current tail to new node and tail to new node

*/
