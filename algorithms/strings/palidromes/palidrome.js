//Given a string, return true if the string is a palidrome and
//false if its not

const palindrome = (str) => {
  const reversedStr = str.split("").reverse().join("");

  return str === reversedStr;
};

module.exports = palindrome;
