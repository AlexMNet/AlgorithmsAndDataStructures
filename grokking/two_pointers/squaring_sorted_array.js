// Given a sorted array, create a new array containing squares of all the numbers of the input array in the sorted order.

// Example 1:

// Input: [-2, -1, 0, 2, 3]
// Output: [0, 1, 4, 4, 9]
// Example 2:

// Input: [-3, -1, 0, 1, 2]
// Output: [0, 1, 1, 4, 9]

/* 
Initialize an array with the same length as the input array and fill with zeros
create two pointers one at opposite ends of the array
create a variable to keep track of the highest available index
while the left pointer is less than or equal to the right pointer
    check and see which element squared is greater
    take the one that is greater and place at at highest avaialbe index and decrement or increment the appropirate poitner. 
    decrement highest index
return the new array
*/

function make_squares(arr) {
  const squares = Array(arr.length).fill(0);
  let highestIndex = arr.length - 1,
    left = 0,
    right = arr.length - 1;

  while (left <= right) {
    let leftSquared = arr[left] * arr[left],
      rightSquared = arr[right] * arr[right];

    if (leftSquared > rightSquared) {
      squares[highestIndex] = leftSquared;
      left += 1;
    } else {
      squares[highestIndex] = rightSquared;
      right -= 1;
    }
    highestIndex -= 1;
    console.log(squares);
  }
  return squares;
}

// function make_squares(arr) {
//   const n = arr.length;
//   squares = Array(n).fill(0);
//   let highestSquareIdx = n - 1;
//   let left = 0,
//     right = n - 1;

//   while (left <= right) {
//     let leftSquare = arr[left] * arr[left],
//       rightSquare = arr[right] * arr[right];
//     if (leftSquare > rightSquare) {
//       squares[highestSquareIdx] = leftSquare;
//       left += 1;
//     } else {
//       squares[highestSquareIdx] = rightSquare;
//       right -= 1;
//     }
//     highestSquareIdx -= 1;
//   }

//   return squares;
// }

console.log(`Squares: ${make_squares([-2, -1, 0, 2, 3])}`); //Squares: 0,1,4,4,9
// console.log(`Squares: ${make_squares([-3, -1, 0, 1, 2])}`); //Squares: 0,1,1,4,9
