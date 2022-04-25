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

const longestCommonPrefix = (arr) => {
  let i = 0;
  let firstWord = arr[0];

  // Check the first word against every other word in the array.
  //Increment i if all all words have the same letter at the index.
  //If the while loop is broken, this means you can return
  while (firstWord[i] && arr.every((w) => w[i] === firstWord[i])) {
    i++;
  }

  return arr[0].substr(0, i);
};

console.log(longestCommonPrefix(['flower', 'flow', 'flight']));
console.log(longestCommonPrefix(['dog', 'racecar', 'car']));
