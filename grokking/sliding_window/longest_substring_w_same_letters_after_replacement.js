/* 
Given a string with lowercase letters only, if you are allowed to replace no more than k letters with any letter, find the length of the longest substring having the same letters after replacement.

Example 1:

Input: String="aabccbb", k=2
Output: 5
Explanation: Replace the two 'c' with 'b' to have the longest repeating substring "bbbbb".
Example 2:

Input: String="abbcb", k=1
Output: 4
Explanation: Replace the 'c' with 'b' to have the longest repeating substring "bbbb".
Example 3:

Input: String="abccde", k=1
Output: 3
Explanation: Replace the 'b' or 'd' with 'c' to have the longest repeating substring "ccc".

*/

function length_of_longest_substring(str, k) {
  let windowStart = 0,
    maxLength = 0,
    maxRepeatLetterCount = 0,
    frequencyMap = {};

  for (let windowEnd = 0; windowEnd < str.length; windowEnd++) {
    const rightChar = str[windowEnd];
    frequencyMap[rightChar] = (frequencyMap[rightChar] || 0) + 1;
    console.log(frequencyMap);

    maxRepeatLetterCount = Math.max(
      maxRepeatLetterCount,
      frequencyMap[rightChar]
    );

    console.log('MaxRepeatLetterCount: ', maxRepeatLetterCount);
    console.log('frequencyMap[rightChar]', frequencyMap[rightChar]);
    console.log('current char: ', str[windowEnd]);
    console.log('-------------');

    // Current window size is from windowStart to windowEnd, overall we have a letter which is
    // repeating 'maxRepeatLetterCount' times, this means we can have a window which has one letter
    // repeating 'maxRepeatLetterCount' times and the remaining letters we should replace.
    // if the remaining letters are more than 'k', it is the time to shrink the window as we
    // are not allowed to replace more than 'k' letters
    console.log(
      'different letters in window: ',
      windowEnd - windowStart + 1 - maxRepeatLetterCount,
      'k: ',
      k
    );
    if (windowEnd - windowStart + 1 - maxRepeatLetterCount > k) {
      const leftChar = str[windowStart];
      frequencyMap[leftChar] -= 1;
      windowStart += 1;
    }
    maxLength = Math.max(maxLength, windowEnd - windowStart + 1);
    console.log('max length: ', maxLength);
    console.log('windowStart: ', windowStart);
  }
  return maxLength;
}

console.log(length_of_longest_substring('aabccbb', 2)); //5
// console.log(length_of_longest_substring('abbcb', 1)); //4
// console.log(length_of_longest_substring('abccde', 1)); //3
