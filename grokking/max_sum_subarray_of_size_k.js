/*
Given an array of positive numbers and a positive number ‘k,’ find the maximum sum of any contiguous subarray of size ‘k’.

Example 1:

Input: [2, 1, 5, 1, 3, 2], k=3 
Output: 9
Explanation: Subarray with maximum sum is [5, 1, 3].
Example 2:

Input: [2, 3, 4, 1, 5], k=2 
Output: 7
Explanation: Subarray with maximum sum is [3, 4].
*/

const max_sum_sub_array = (array, k) => {
  let maxSum = 0,
    windowSum = 0,
    windowStart = 0;

  for (let windowEnd = 0; windowEnd < array.length; windowEnd++) {
    windowSum += array[windowEnd];

    if (windowEnd >= k - 1) {
      maxSum = Math.max(maxSum, windowSum);
      windowSum -= array[windowStart];
      windowStart += 1;
    }
  }
  return maxSum;
};

// const array = [2, 1, 5, 1, 3, 2];
// const k = 3;

const array = [2, 3, 4, 1, 5];
const k = 2;

console.log(max_sum_sub_array(array, k));
