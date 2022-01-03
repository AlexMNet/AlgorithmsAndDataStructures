/*
How To Run Test
jest findingVowels/test.js --watch
*/

const vowels = require('./findingVowels');

test('"Hi There" should return the number 3', () => {
  expect(vowels('Hi there!')).toBe(3);
});

test('"Why Do you ask?" should return the number 4', () => {
  expect(vowels('Why do you ask?')).toBe(4);
});

test('"Hi There" should return the number 0', () => {
  expect(vowels('Why?')).toBe(0);
});
