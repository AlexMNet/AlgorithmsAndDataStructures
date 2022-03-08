/*
Write a function to find the longest common prefix string
amongst an array of strings.

If there is no common prefix, return an empty string. 

Example 1:

Input: strs = ["flower","flow","flight"]
Output: "fl"
Example 2:

Input: strs = ["dog","racecar","car"]
Output: ""
Explanation: There is no common prefix among the input strings.

*/

longestCommonPrefix(['flower', 'flow', 'flight']);

const longestCommonPrefix = (arr) => {
  let result = '';

  for (let i = 0; i < arr.length; i++) {
    if (arr[i][i] === arr[i + 1][i] && arr[i][i] === arr[i + 2][i]) {
      result += arr[i][i];
    }
  }
  return result;
};
