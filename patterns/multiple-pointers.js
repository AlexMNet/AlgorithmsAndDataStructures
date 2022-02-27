/*
Write a function called sumZero which accepts a sorted array of integers. 
The function should find the first pair where the sum is 0


sumZero([-3, -2, -1, 0, 1, 2, 3]) // [-3, 3]
sumZero([-2, 0, 1, 3]) //undefined
sumZero([1, 2, 3]) //undefined
*/

//Naive solution
const sumZero = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === 0) {
        return [arr[i], arr[j]];
      }
    }
  }
  return undefined;
};
