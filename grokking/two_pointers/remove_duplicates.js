/*
Given an array of sorted numbers, remove all duplicates from it. You should not use any extra space; after removing the duplicates in-place return the length of the subarray that has no duplicate in it.

Example 1:

Input: [2, 3, 3, 3, 6, 9, 9]
Output: 4
Explanation: The first four elements after removing the duplicates will be [2, 3, 6, 9].
Example 2:

Input: [2, 2, 2, 11]
Output: 2
Explanation: The first two elements after removing the duplicates will be [2, 11].

Sudo 
Right pointer will look at the element its at as well as the element before it
If they are not equal, take the element at leftPointer and make it equal to element at Right pointer then increment leftPointer + 1
The left pointer is also keeping track of how many items are in the "new" array without duplicates. Ofcourse we never created a new array
We are just sorting in place. 
*/

//Easier to understand
const remove_duplicates = (arr) => {
  let left = 1;

  for (let right = 1; right < arr.length; right++) {
    if (arr[right] !== arr[right - 1]) {
      arr[left] = arr[right];
      left++;
    }
  }
  return left;
};

// function remove_duplicates(arr) {
//   let leftPointer = 0;

//   for (let rightPointer = 0; rightPointer < arr.length; rightPointer++) {
//     if (arr[rightPointer] !== arr[rightPointer - 1]) {
//       arr[leftPointer] = arr[rightPointer];
//       leftPointer++;
//     }
//   }
//   return leftPointer;
// }

// function remove_duplicates(arr) {
//   // index of the next non-duplicate element
//   let nextNonDuplicate = 1;

//   let i = 0;
//   while (i < arr.length) {
//     console.log('i: ', i, 'nextNonDuplicate: ', nextNonDuplicate - 1);
//     if (arr[nextNonDuplicate - 1] !== arr[i]) {
//       arr[nextNonDuplicate] = arr[i];
//       console.log(arr[nextNonDuplicate]);
//       nextNonDuplicate += 1;
//       console.log(arr);
//     }
//     i += 1;
//   }

//   return nextNonDuplicate;
// }

console.log(remove_duplicates([2, 3, 3, 3, 6, 9, 9])); //4
console.log(remove_duplicates([2, 2, 2, 11])); //2
