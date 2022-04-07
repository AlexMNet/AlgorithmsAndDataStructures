/* 
Permutation in a String (hard)#
Given a string and a pattern, find out if the string contains any permutation of the pattern.

Permutation is defined as the re-arranging of the characters of the string. For example, “abc” has the following six permutations:

abc
acb
bac
bca
cab
cba
If a string has ‘n’ distinct characters, it will have n!
n!
 permutations.

Example 1:

Input: String="oidbcaf", Pattern="abc"
Output: true
Explanation: The string contains "bca" which is a permutation of the given pattern.
Example 2:

Input: String="odicf", Pattern="dc"
Output: false
Explanation: No permutation of the pattern is present in the given string as a substring.
Example 3:

Input: String="bcdxabcdy", Pattern="bcdyabcdx"
Output: true
Explanation: Both the string and the pattern are a permutation of each other.
Example 4:

Input: String="aaacb", Pattern="abc"
Output: true
Explanation: The string contains "acb" which is a permutation of the given pattern.

Sudo
Create a HashMap to calculate the frequencies of all characters in the pattern.
Iterate through the string, adding one character at a time in the sliding window.
If the character being added matches a character in the HashMap, decrement its frequency in the map. If the character frequency becomes zero, we got a complete match.
If at any time, the number of characters matched is equal to the number of distinct characters in the pattern (i.e., total characters in the HashMap), we have gotten our required permutation.
If the window size is greater than the length of the pattern, shrink the window to make it equal to the pattern’s size. At the same time, if the character going out was part of the pattern, put it back in the frequency HashMap.

*/

// 'oid bca f', 'abc'
//length = 3
//matched = 3
//windowEnd = 5
//{ a: 0, b: 0, c: 0 }

const find_permutation = (str, pattern) => {
  let windowStart = 0,
    matched = 0,
    charFrequency = {};

  for (let i = 0; i < pattern.length; i++) {
    let char = pattern[i];
    charFrequency[char] = (charFrequency[char] || 0) + 1;
  }
  console.log(charFrequency);

  for (let windowEnd = 0; windowEnd < str.length; windowEnd++) {
    const rightChar = str[windowEnd];
    if (rightChar in charFrequency) {
      charFrequency[rightChar] -= 1;
      if (charFrequency[rightChar] === 0) {
        matched += 1;
      }
    }
    if (matched === Object.keys(charFrequency).length) {
      return true;
    }
    if (windowEnd >= pattern.length - 1) {
      let leftChar = str[windowStart];
      windowStart += 1;
      if (leftChar in charFrequency) {
        if (charFrequency[leftChar] === 0) {
          matched -= 1;
        }
        charFrequency[leftChar] += 1;
      }
    }
  }

  return false;
};

console.log(`Permutation exist: ${find_permutation('oidbcaf', 'abc')}`); //true
console.log(`Permutation exist: ${find_permutation('odicf', 'dc')}`); //false
console.log(`Permutation exist: ${find_permutation('bcdxabcdy', 'bcdyabcdx')}`); //true
console.log(`Permutation exist: ${find_permutation('aaacb', 'abc')}`); //true
