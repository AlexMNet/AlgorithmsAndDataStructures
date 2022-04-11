/* 
Max Heap (Type of tree)
Parent nodes are always larger than the child nodes.
No order on left vs right child. 

A binary heap is as compact as possible. All the children of each node are as full as they can be and left children are filled out first
Compact = Every left and right are filled before tree moves down

When using an array to represent a heap...
For any index of an array n...
THe left child is stored at 2n + 1
The right child is at 2n + 1

For any child node at index n...
Its parent is at index Math.floor((n - 1) / 2)

When inserting, you insert into the "tree" from left to right.
This means you are pushing onto the end of the array. 

When you insert the node its most likely not going to be in the right position
So it will need to "bubble up" until it finds its correct resting place
*/

class maxHeap {
  constructor() {
    this.heap = [];
    this.elements = 0;
  }

  insert(val) {
    if (this.elements >= this.heap.length) {
      this.elements = this.elements + 1;
      this.heap.push(val);
      this.__percolateUp(this.heap.length - 1);
    } else {
      this.heap[this.elements] = val;
      this.elements = this.elements + 1;
      this.__percolateUp(this.elements - 1);
    }
  }

  getMax() {
    if (this.elements != 0) return this.heap[0];
    return null;
  }

  removeMax() {
    if (this.elements > 1) {
      var max = this.heap[0];
      this.heap[0] = this.heap[this.elements - 1];
      this.elements = this.elements - 1;
      this.__maxHeapify(0);
      return max;
    } else if (this.elements == 1) {
      var max = this.heap[0];
      this.elements = this.elements - 1;
      return max;
    } else {
      return null;
    }
  }

  __percolateUp(index) {
    var parent = Math.floor((index - 1) / 2);
    if (index <= 0) return;
    else if (this.heap[parent] < this.heap[index]) {
      var tmp = this.heap[parent];
      this.heap[parent] = this.heap[index];
      this.heap[index] = tmp;
      this.__percolateUp(parent);
    }
  }
  __maxHeapify(index) {
    var left = index * 2 + 1;
    var right = index * 2 + 2;
    var largest = index;
    if (this.elements > left && this.heap[largest] < this.heap[left]) {
      largest = left;
    }
    if (this.elements > right && this.heap[largest] < this.heap[right])
      largest = right;
    if (largest != index) {
      var tmp = this.heap[largest];
      this.heap[largest] = this.heap[index];
      this.heap[index] = tmp;
      this.__maxHeapify(largest);
    }
  }

  buildHeap(arr) {
    this.heap = arr;
    this.elements = this.heap.length;
    for (var i = this.heap.length - 1; i >= 0; i--) {
      this.__maxHeapify(i);
    }
  }
}
var heap = new maxHeap();
var arr = [6, 9, 3, 4, 13, 22, 1, 30, 17];
heap.buildHeap(arr);
console.log(heap.getMax());

heap.removeMax();

console.log(heap.getMax());
