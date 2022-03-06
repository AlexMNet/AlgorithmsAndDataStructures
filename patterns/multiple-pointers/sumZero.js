/*
Write a function called sumZero which accepts a sorted array of integers. 
The function should find the first pair where the sum is 0


sumZero([-3, -2, -1, 0, 1, 2, 3]) // [-3, 3]
sumZero([-4, -2, -1, 0, 1, 2, 3]) // [-2, 2]
sumZero([-2, 0, 1, 3]) //undefined
sumZero([1, 2, 3]) //undefined
*/

//Solution #1
const sumZero = (arr) => {
  if (arr.length === 0) {
    throw new Error('Array must have a length!');
  }
  let low = 0;
  let high = arr.length - 1;

  while (low !== high) {
    if (arr[low] + arr[high] === 0) {
      return [arr[low], arr[high]];
    }

    if (arr[low] + arr[high] < 0) {
      low++;
    }

    if (arr[low] + arr[high] > 0) {
      high--;
    }
  }
  return undefined;
};

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

const twoSum = (nums, target) => {
  const prevValues = {};
  for (let i = 0; i < nums.length; i++) {
    const compliment = target - nums[i];
    const index2 = prevValues[compliment];

    if (index2 != null) {
      return [i, index2];
    } else {
      prevValues[nums[i]] = i;
    }
  }
};
