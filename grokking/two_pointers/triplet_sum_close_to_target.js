/*
Given an array of unsorted numbers and a target number, find a triplet in the array whose sum is as close to the target number as possible, return the sum of the triplet. If there are more than one such triplet, return the sum of the triplet with the smallest sum.

Example 1:

Input: [-2, 0, 1, 2], target=2
Output: 1
Explanation: The triplet [-2, 1, 2] has the closest sum to the target.
Example 2:

Input: [-3, -1, 1, 2], target=1
Output: 0
Explanation: The triplet [-3, 1, 2] has the closest sum to the target.
Example 3:

Input: [1, 0, 1, 1], target=100
Output: 3
Explanation: The triplet [1, 1, 1] has the closest sum to the target.
*/

const triplet_sum_close_to_target = (arr, targetSum) => {
  arr = arr.sort((a, b) => a - b);
  let closest = Infinity;

  for (let i = 0; i < arr.length - 2; i++) {
    let left = i + 1,
      right = arr.length - 1;
    while (left < right) {
      let currSum = arr[i] + arr[left] + arr[right];
      if (Math.abs(currSum - targetSum) < Math.abs(closest - targetSum))
        closest = currSum;

      if (currSum > targetSum) {
        right--;
      } else {
        left++;
      }
    }
  }
  return closest;
};

console.log(triplet_sum_close_to_target([-2, -2, -2, 0, 1, 2], 2)); //1
console.log(triplet_sum_close_to_target([-3, -1, 1, 2], 1)); //0
console.log(triplet_sum_close_to_target([1, 0, 1, 1], 100)); //3
