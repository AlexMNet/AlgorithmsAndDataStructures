// Places small values into sorted position
//Each pass of the array it looks for the min val and places it at the beginning

// Selection Sort Pseudocode
/*
1) Store the first element as the smallest value you've seen so far (start at first ele)
2)Compate this item to the next item in the array until you find a smaller number then update min val (idx)
3) if the "min" is the not e value (idx) you initially began with, swap the 2 values
4) Repeat  this iwth the next element until the array is sorted
*/

const arr = [34, 19, 24, 14, 4, 44, 1, 15, 3];

const selectionSort = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    let min = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[min]) {
        min = j;
      }
    }
    const temp = arr[i];
    arr[i] = arr[min];
    arr[min] = temp;
  }

  return arr;
};

const arr = [34, 19, 24, 14, 4, 44, 1, 15, 3];
const selectionSort = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    let min = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[min]) {
        min = j;
      }
    }
    [arr[i], arr[min]] = [arr[min], arr[i]];
  }
  return arr;
};
