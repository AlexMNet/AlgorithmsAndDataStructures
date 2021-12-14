//Start looping with a variable i at the end of array toward the begging
//start with an inner loop with a variable called j toward the begining of the loop until i - 1
// if arr[j] is > arr[j + 1], swap
//Return sorted array

const arr = [37, 45, 29, 8];

const swap = (arr, a, b) => {
  [arr[a], arr[b]] = [arr[b], arr[a]];
};

const bubbleSort = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    for (j = 0; j < arr.length - 1; j++) {
      console.log(arr, arr[j], arr[j + 1]);
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1);
      }
    }
  }
  return arr;
};

//Problem with above is you are iterating all the way to the end of the array every time
//Even though the large items at the end are not changing.

const arr = [3, 7, 1, 10, 5];
const swap = (arr, a, b) => {
  [arr[a], arr[b]] = [arr[b], arr[a]];
};
const bubbleSort = (arr) => {
  for (let i = arr.length - 1; i > 0; i--) {
    for (let j = 0; j < i; j++) {
      console.log(arr, arr[j], arr[j + 1], `iterations of j: ${i}`);
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1);
      }
    }
    console.log('Pass complete');
  }
  return arr;
};

//Same as above wwithout the console.logs

const arr = [
  36, 96, 7, 89, 45, 12, 75, 80, 41, 30, 31, 17, 70, 2, 71, 44, 65, 67, 20, 3,
  48, 5, 61, 56, 50, 92, 19, 81, 7, 22, 78, 8, 92, 85, 71, 32, 14, 30, 61, 89,
  9, 29, 23, 35, 62, 47, 77, 28, 34, 93, 13, 47, 80, 0, 30, 25, 84, 38, 75, 52,
  73, 92, 95, 80, 15, 29, 56, 69, 82, 26, 51, 20, 18, 53, 43, 4, 59, 13, 37, 52,
  17, 89, 10, 49, 77, 67, 31, 9, 100, 84, 50, 74, 65, 16, 77, 25, 9, 52, 0, 42,
];

const bubbleSort = (arr) => {
  for (let i = arr.length - 1; i > 0; i--) {
    for (let j = 0; j < i; j++) {
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1);
      } else {
        //if no swaps are made then arr is sorted! Return!
        return arr;
      }
    }
  }
  return arr;
};
