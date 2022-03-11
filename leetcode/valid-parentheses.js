/*
Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
 

Example 1:

Input: s = "()"
Output: true
Example 2:

Input: s = "()[]{}"
Output: true
Example 3:

Input: s = "(]"
Output: false
 
 */

isValid('()'); //true
isValid('()[]{}'); //true
isValid('(]'); //false

//Solution first time through
var isValid = function (s) {
  for (let i = 0; i < s.length; i++) {
    if (s[i] === '(') {
      if (s[i + 1] !== ')') return false;
    }
    if (s[i] === '[') {
      if (s[i + 1] !== ']') return false;
    }
    if (s[i] === '{') {
      if (s[i + 1] !== '}') return false;
    }
  }

  return true;
};
