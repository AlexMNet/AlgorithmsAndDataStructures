/* 
Given a string, find the length of the longest substring, which has all distinct characters.

Example 1:

Input: String="aabccbb"
Output: 3
Explanation: The longest substring with distinct characters is "abc".
Example 2:

Input: String="abbbb"
Output: 2
Explanation: The longest substring with distinct characters is "ab".
Example 3:

Input: String="abccde"
Output: 3
Explanation: Longest substrings with distinct characters are "abc" & "cde".


*/

const non_repeat_substring = (str) => {
  let windowStart = 0,
    maxLength = 0,
    charIndexMap = {};

  for (let windowEnd = 0; windowEnd < str.length; windowEnd++) {
    const rightChar = str[windowEnd];

    if (rightChar in charIndexMap) {
      windowStart = Math.max(windowStart, charIndexMap[rightChar] + 1);
    }

    charIndexMap[rightChar] = windowEnd;
    maxLength = Math.max(maxLength, windowEnd - windowStart + 1);
  }
  return maxLength;
};

console.log(
  `Length of the longest substring: ${non_repeat_substring('abccde')}`
);

/*
String="abccde"
output: 3
Iterations
1. rightChar ('a') is added to charIndexMap with its current index as its value. {a: 0}, maxLength = 1
2. rightChar ('b') is added to charIndexMap {a: 0, b: 1}, maxLength = 2
3. rightChar ('c') is added to charIndexMap {a: 0, b: 1, c: 2}, maxLength = 3
4. If block code is hit. Set new windowStart to Math.max of windowStart or the index of the last rightChar + 1

*/

// const non_repeat_substring = (str) => {
//   let windowStart = 0,
//     maxLength = 0,
//     charIndexMap = {};

//   // try to extend the range [windowStart, windowEnd]
//   for (let windowEnd = 0; windowEnd < str.length; windowEnd++) {
//     const rightChar = str[windowEnd];
//     // if the map already contains the 'rightChar', shrink the window from the beginning so that
//     // we have only one occurrence of 'rightChar'
//     if (rightChar in charIndexMap) {
//       // this is tricky; in the current window, we will not have any 'rightChar' after its previous index
//       // and if 'windowStart' is already ahead of the last index of 'rightChar', we'll keep 'windowStart'
//       //   console.log(windowStart, windowEnd);
//       console.log(windowStart, charIndexMap[rightChar] + 1);
//       console.log(str[windowStart], rightChar);
//       windowStart = Math.max(windowStart, charIndexMap[rightChar] + 1);
//     }
//     // insert the 'rightChar' into the map
//     charIndexMap[rightChar] = windowEnd;
//     // remember the maximum length so far
//     maxLength = Math.max(maxLength, windowEnd - windowStart + 1);
//   }
//   return maxLength;
// };

// console.log(
//   `Length of the longest substring: ${non_repeat_substring('aabccbb')}`
// );

// console.log(
//   `Length of the longest substring: ${non_repeat_substring('abbbb')}`
// ); //2

// console.log(
//   `Length of the longest substring: ${non_repeat_substring('abccde')}`
// ); //3
