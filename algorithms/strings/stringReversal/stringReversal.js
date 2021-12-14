// Given a String, write a function that returns the string in reverse order
//Example:
//reverse("Alex") === "xelA"
//reverse('Hello!!!) === "!!!olleH"

//Solution 1
//Using array methods
const reverse = (str) => {
  return str.split('').reverse().join('');
};

or;

const reverse = (str) => Array.from(str).reverse().join('');

//Typescript
// const reverse = (str: string) => str.split('').reverse().join('');
// console.log(reverse('Alex'));

//Solution 2
//Using the reduce method
// const reverse = (str) => str.split('').reduce((a, c) => c + a);

//Solution 3
//Using a loop

// const reverse = (str) => {
//   let reversed = "";
//   for (char of str) {
//     reversed = char + reversed;
//   }
//   return reversed;
// };
