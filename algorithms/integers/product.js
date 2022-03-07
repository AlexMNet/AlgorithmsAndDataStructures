/* 
Write a function that takes in 2 numbers and returns the product of those two numbers. 
YOu CANNOT use the * symbol

*/

const product = (a, b) => {
  let result = 0;

  for (let i = 0; i < Math.abs(b); i++) {
    result += Math.abs(a);
  }

  if (
    (Math.sign(a) === -1 && Math.sign(b) === 1) ||
    (Math.sign(a) === 1 && Math.sign(b) === -1)
  ) {
    return -Math.abs(result);
  }
  return result;
};
