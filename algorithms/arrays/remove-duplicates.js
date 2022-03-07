/* 
Write a function that takes in an array and removes duplicate values. 
return array with only unique values
*/

removeDuplicates([1, 1, 2, 3, 3, 4, 5, 6, 7, 7, 7, 8]);

//Using a second array
const removeDuplicates = (arr) => {
  const result = [];

  for (let i = 0; i < arr.length; i++) {
    if (result.indexOf(arr[i]) === -1) {
      result.push(arr[i]);
    }
  }

  return result;
};

//Loop through array and set the values of the array = to true in an object
//Since the object can only set a value to true only once, it will not contain unique values
//use Object.keys() to return the keys of the object which will be the unique values
//One caveat is that the array returned by Object.keys will be strings
//In order to solve that map over the area to parseInt each value
//The returned area from map will be only unique numbers!

const arr = [1, 1, 2, 3, 3, 4, 5, 6, 7, 7, 7, 8];
//Using origin array
const removeDuplicates = (arr) => {
  const obj = {};

  for (num of arr) {
    obj[num] = true;
  }

  return Object.keys(obj).map((key) => parseInt(key));
};

//Using a javascript set
//A set is a special type of object that can only hold unique values.
//Its contents can be spread using the spread operator.
//So you can create a set with the arr passed into the function
//Then you can spread the contents of the set into an array and return it as the result
//This can be accomplished in one line.
const removeDuplicates = (arr) => [...new Set(arr)];
