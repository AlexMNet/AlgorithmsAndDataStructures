//Write a fn that returns the number of vowels used in a string
// Vowels are characters, a, e, i, o, u

//vowels("Hi there!"); ---> 3
//vowels("Why do you ask?"); ---> 4
//vowels("Why?"); ---> 0

/*
How To Run Test
jest findingVowels/test.js --watch
*/

const vowels = (str) => {
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  let count = 0;

  for (let char of str.toLowerCase()) {
    if (vowels.includes(char)) count++;
  }

  return count;
};

module.exports = vowels;

//using regex
// const vowels = (str) => {
//   const matches = str.match(/[aeiou]/gi);
//   return matches ? matches.length : 0;
// };

//Initial Approach
// const vowels = (str) => {
//   const vowels = ['a', 'e', 'i', 'o', 'u'];
//   const result = [];
//   str = str.toLowerCase().split('');

//   str.forEach((letter) => {
//     if (vowels.includes(letter)) {
//       result.push(letter);
//     }
//   });

//   if (result.length === 0) return 0;

//   return result.toS;
// };

//Second Approach forgetting for...of loop is can iterate over strings
// const vowels = (str) => {
//   const vowels = ['a', 'e', 'i', 'o', 'u'];
//   let count = 0;

//   str
//     .toLowerCase()
//     .split('')
//     .forEach((letter) => {
//       vowels.includes(letter) && count++;
//     });

//   return count;
// };
