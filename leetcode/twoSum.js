/*
Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.

Example 1:

Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
Example 2:

Input: nums = [3,2,4], target = 6
Output: [1,2]
Example 3:

Input: nums = [3,3], target = 6
Output: [0,1]

*/

//create an object to hold previous values
//loop over array
//Calculate needed number based on curr array number
//check if needed value exists in object, if so you have your two values
//if not, save number to object as key with index as value

//Given: Array of nums & target value
//Result: Array of the indices of that values that add up to the target

const twoSum = (nums, target) => {
  const prevValues = {};

  for (let i = 0; i < nums.length; i++) {
    let currentValue = nums[i];
    let neededValue = target - currentValue;
    let idx2 = prevValues[neededValue];

    if (idx2 !== undefined) {
      return [i, idx2];
    } else {
      prevValues[currentValue] = i;
    }
  }
};

//Can also be solved via brute force with nested arrays
