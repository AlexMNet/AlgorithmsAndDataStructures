/* 
String Anagrams (hard)#
Given a string and a pattern, find all anagrams of the pattern in the given string.

Every anagram is a permutation of a string. As we know, when we are not allowed to repeat characters while finding permutations of a string, we get N!
N!
 permutations (or anagrams) of a string having N
N
 characters. For example, here are the six anagrams of the string “abc”:

abc
acb
bac
bca
cab
cba
Write a function to return a list of starting indices of the anagrams of the pattern in the given string.

Example 1:

Input: String="ppqp", Pattern="pq"
Output: [1, 2]
Explanation: The two anagrams of the pattern in the given string are "pq" and "qp".
Example 2:

Input: String="abbcabc", Pattern="abc"
Output: [2, 3, 4]
Explanation: The three anagrams of the pattern in the given string are "bca", "cab", and "abc".
*/

const find_string_anagrams = (str, pattern) => {
  let windowStart = 0,
    matched = 0,
    charFrequency = {};

  for (let i = 0; i < pattern.length; i++) {
    let char = pattern[i];
    charFrequency[char] = (charFrequency[char] || 0) + 1;
  }

  const resultIndicies = [];
  for (let windowEnd = 0; windowEnd < str.length; windowEnd++) {
    let rightChar = str[windowEnd];
    if (rightChar in charFrequency) {
      charFrequency[rightChar] -= 1;
      if (charFrequency[rightChar] === 0) {
        matched += 1;
      }
    }

    if (matched === Object.keys(charFrequency).length) {
      resultIndicies.push(windowStart);
    }

    if (windowEnd >= pattern.length - 1) {
      let leftChar = str[windowStart];
      if (leftChar in charFrequency) {
        if (charFrequency[leftChar] === 0) {
          matched -= 1;
        }
        charFrequency[leftChar] += 1;
      }
      windowStart += 1;
    }
  }
  return resultIndicies;
};

console.log(find_string_anagrams('ppqp', 'pq')); //[1, 2]
console.log(find_string_anagrams('abbcabc', 'abc')); //[2, 3, 4]
