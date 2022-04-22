// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.

/*
Sudo Code 
Initialize an empty stack
Initialize an object with open and closed parentheses as key value pairs 'open  parentheses' : 'closed parenthesis'
Loop through the string. If the current char is an open parenthesis, push it into the stack
Else the current character is a closing parentheses. In this case, pop off the last element in the stack 
If the map[popped off element] !== current char return false
If the stack is empty then the string is valid (true) if its not empty the string is invalid(false)
*/

var isValid = function (s) {
  let stack = [];
  let map = { '(': ')', '{': '}', '[': ']' };

  for (let char of s) {
    if (char in map) {
      stack.push(char);
    } else {
      let openParen = stack.pop();
      if (map[openParen] !== char) {
        return false;
      }
    }
  }
  return stack.length === 0;
};
console.log(isValid('()[]{})'));
