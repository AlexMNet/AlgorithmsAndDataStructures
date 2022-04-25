/*
Create a function that returns the nth number of the fibonacci sequence
*/

//Iterative solution
const fib = (n) => {
  const res = [0, 1];

  for (let i = 2; i <= n; i++) {
    let a = res[i - 1];
    let b = res[i - 2];

    res.push(a + b);
  }

  return res[n];
};

//Recursive solution
const fib = (n) => {
  if (n < 2) return n;

  return fib(n - 1) + fib(n - 2);
};

//Memoized Recursive Solution
const fib = (n, memo = {}) => {
  if (n in memo) return memo[n];
  if (n < 2) return n;

  memo[n] = fib(n - 1, memo) + fib(n - 2, memo);
  return memo[n];
};

console.log(fib(7)); //13
