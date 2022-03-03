/* 
Given a sorted array of integers, return index of given key. 
Return -1 if the key is not found

binarySearch([1, 10, 20, 47, 59, 63, 75, 88, 99, 107, 120, 133, 155, 162, 176, 188, 199, 210, 222], 47)
// 3

Sudo Code

At every step, consider the array between low and high indices
Calculate the mid index.
If the element at the mid index is the key, return mid.
If the element at mid is greater than the key, then change the index high to mid - 1.
The index at low remains the same.
If the element at mid is less than the key, then change low to mid + 1. The index at high remains the same.
When low is greater than high, the key doesn’t exist and -1 is returned.

*/

//Naive
const binarySearch = (a, key) => {
  for (let i = 0; i < a.length; i++) {
    if (a[i] === key) return i;
  }
  return -1;
};

const binarySearch = (a, key) => {
  for (const [idx, ele] of a.entries()) {
    if (ele === key) return idx;
  }
  return -1;
};

//Iterative solution
const binarySearch = (a, key) => {
  let low = 0;
  let high = a.length - 1;

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);

    if (a[mid] === key) return mid;

    if (a[mid] > key) {
      high = mid - 1;
    }

    if (a[mid] < key) {
      low = mid + 1;
    }
  }
  return -1;
};

//Recursive solution
const binarySearch = (a, key, low, high) => {
  if (low > high) {
    return -1;
  }

  low = low || 0;
  high = high || a.length - 1;

  let mid = Math.floor((high + low) / 2);

  if (a[mid] === key) return mid;

  if (a[mid] > key) {
    return binarySearch(a, key, low, mid - 1);
  }

  if (a[mid] < key) {
    return binarySearch(a, key, mid + 1, high);
  }
};

binarySearch([1, 2, 4, 7, 8, 12, 15, 19, 24, 50, 69, 80, 100], 12); //5
binarySearch([1, 2, 4, 7, 8, 12, 15, 19, 24, 50, 69, 80, 100], 44); //-1
binarySearch([1, 2, 4, 7, 8, 12, 15, 19, 24, 50, 69, 80, 100], 80); //11
