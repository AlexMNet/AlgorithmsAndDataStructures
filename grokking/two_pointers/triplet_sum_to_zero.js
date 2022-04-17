/*
Problem Statement #
Given an array of unsorted numbers, find all unique triplets in it that add up to zero.

Example 1:

Input: [-3, 0, 1, 2, -1, 1, -2]
Output: [-3, 1, 2], [-2, 0, 2], [-2, 1, 1], [-1, 0, 1]
Explanation: There are four unique triplets whose sum is equal to zero.
Example 2:

Input: [-5, 2, -1, -2, 3]
Output: [[-5, 2, 3], [-2, -1, 3]]
Explanation: There are two unique triplets whose sum is equal to zero.

*/

let nums = [-5, 2, -1, -2, 3];

const searchTriplets = (nums) => {
  const triplets = [];
  nums = nums.sort((a, b) => a - b);

  for (let i = 0; i < nums.length && nums[i] <= 0; i++) {
    if (nums[i] === nums[i - 1]) continue;
    search_pair(nums, i, triplets);
  }
  return triplets;
};

const search_pair = (nums, i, triplets) => {
  let left = i + 1;
  let right = nums.length - 1;

  while (left < right) {
    let currentSum = nums[left] + nums[right] + nums[i];
    if (currentSum === 0) {
      triplets.push([nums[left], nums[right], nums[i]]);
      left++;
      right--;
      while (left < right && nums[right] === nums[right + 1]) {
        right -= 1;
      }
      while (left < right && nums[left] === nums[left - 1]) {
        left++;
      }
    } else if (currentSum > 0) {
      right--;
    } else {
      left++;
    }
  }
};

// console.log(searchTriplets([-5, 2, -1, -2, 3])); //[[-5, 2, 3], [-2, -1, 3]]
console.log(searchTriplets([-3, 0, 1, 2, -1, 1, -2])); //[-3, 1, 2], [-2, 0, 2], [-2, 1, 1], [-1, 0, 1]
