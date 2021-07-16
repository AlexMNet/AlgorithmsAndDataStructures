//Take a number and return the number in reverse order.

const reverseInt = (n) => {
  return Math.abs(n).toString().split("").reverse().join("") * Math.sign(n);
};

module.exports = reverseInt;
