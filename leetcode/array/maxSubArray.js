/*
Easy
Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.

A subarray is a contiguous part of an array.

Example 1:

Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
Output: 6
Explanation: [4,-1,2,1] has the largest sum = 6.
Example 2:

Input: nums = [1]
Output: 1
Example 3:

Input: nums = [5,4,-1,7,8]
Output: 23 

Follow up: If you have figured out the O(n) solution, try coding another solution using the divide and conquer approach, which is more subtle.
*/

//Brute Force Approach
//Time Complexity: O(n^2) due to nested loops
//Space Complexity O(1) no matter how big the input, we are only using two variables
// const maxSubArray = (nums) => {
//   let maxSubArray = -Infinity;

//   for (let i = 0; i < nums.length; i++) {
//     let currentSubArray = 0;
//     for (let j = i; j < nums.length; j++) {
//       currentSubArray += nums[j];
//       maxSubArray = Math.max(maxSubArray, currentSubArray);
//     }
//   }
//   return maxSubArray;
// };

// const maxSubArray = (nums) => {
//   let currentSubArray = [0];
//   let maxSubArray = [0];

//   for (let i = 1; i < nums.length; i++) {
//     const num = nums[i];
//     currentSubArray = Math.max(num, currentSubArray + num);
//     maxSubArray = Math.max(currentSubArray, maxSubArray);
//   }

//   return maxSubArray;
// };

//Dynamic Programming. Kande's Algorithm
// const maxSubArray = (nums) => {
//   let currentSubArray = nums[0];
//   let maxSubArray = nums[0];

//   for (let i = 1; i < nums.length; i++) {
//     const num = nums[i];
//     currentSubArray = Math.max(num, currentSubArray + num);
//     maxSubArray = Math.max(maxSubArray, currentSubArray);
//   }

//   return maxSubArray;
// };

console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4])); //output: 6
console.log(maxSubArray([1])); //output: 1
console.log(maxSubArray([5, 4, -1, 7, 8])); //output: 23
