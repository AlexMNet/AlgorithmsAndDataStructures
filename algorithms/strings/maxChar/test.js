const maxChar = require("./maxChar");

test("return the character that appears the most in a string", () => {
  expect(maxChar("Apple")).toBe("p");
});

test("return the character that appears the most in a string", () => {
  expect(maxChar("bee-eater")).toBe("e");
});

test("return the character that appears the most in a string", () => {
  expect(maxChar("Testing 12123111")).toBe("1");
});
