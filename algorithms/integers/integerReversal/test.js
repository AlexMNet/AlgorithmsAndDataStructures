const reverseInt = require("./integerReversal");

test("Take in a number and return the reverse of that number", () => {
  expect(reverseInt(34)).toBe(43);
});

test("Take in a number and return the reverse of that number", () => {
  expect(reverseInt(-1234)).toBe(-4321);
});

test("Take in a number and return the reverse of that number", () => {
  expect(reverseInt(-90)).toBe(-9);
});
