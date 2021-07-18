const palindrome = require("./palidrome");

test("return true if string is palindrome or false if its not", () => {
  expect(palindrome("racecar")).toBe(true);
});

test("return true if string is palindrome or false if its not", () => {
  expect(palindrome("Apple")).toBe(false);
});
