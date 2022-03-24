/*
Given a string, find the length of the longest substring in it with no more than K distinct characters.

Example 1:

Input: String="araaci", K=2
Output: 4
Explanation: The longest substring with no more than '2' distinct characters is "araa".
Example 2:

Input: String="araaci", K=1
Output: 2
Explanation: The longest substring with no more than '1' distinct characters is "aa".
Example 3:

Input: String="cbbebi", K=3
Output: 5
Explanation: The longest substrings with no more than '3' distinct characters are "cbbeb" & "bbebi".
Example 4:

Input: String="cbbebi", K=10
Output: 6
Explanation: The longest substring with no more than '10' distinct characters is "cbbebi".

Sudo Code 
1. Initialize charFrequency object, maxLenght = 0 & windowStart = 0
2. Create a for loop to str.length and use windowEnd variable instead of i 
   2a for each char, add character to the charFrequency obj
   2b While charFrequency.length > k 
        const leftChar = str[windowStart]
        subtract 1 of char from charFrequency. If its zero, remove it
        close left side of window by incrementing windowStart
    3. maxLength will = Math.max(maxLength or windowEnd - windowStart + 1)  
4. return maxLength


*/

// str = 'araaci';
// k = 2

const longest_substring_with_k_distinct = (str, k) => {
  let windowStart = 0,
    maxLength = 0,
    charFrequency = {};

  for (let windowEnd = 0; windowEnd < str.length; windowEnd++) {
    const rightChar = str[windowEnd];
    charFrequency[rightChar] = (charFrequency[rightChar] || 0) + 1;

    while (Object.keys(charFrequency).length > k) {
      const leftChar = str[windowStart];
      charFrequency[leftChar] -= 1;
      if (charFrequency[leftChar] === 0) {
        delete charFrequency[leftChar];
      }
      windowStart += 1;
    }
    maxLength = Math.max(maxLength, windowEnd - windowStart + 1);
  }
  return maxLength;
};

console.log(
  `Length of the longest substring: ${longest_substring_with_k_distinct(
    'araaci',
    2
  )}`
); // 4

console.log(
  `Length of the longest substring: ${longest_substring_with_k_distinct(
    'araaci',
    1
  )}`
); // 2

console.log(
  `Length of the longest substring: ${longest_substring_with_k_distinct(
    'cbbebi',
    3
  )}`
); //5
