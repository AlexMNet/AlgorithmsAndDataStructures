/*
Directions

Given an array and a chunk size, divide the array into many subarrays where each subarray is of length size

---Examples
chunk([1, 2, 3, 4], 2) --> [[1, 2], [3, 4]]
chunk([1, 2, 3, 4, 5], 2) --> [[1, 2], [3, 4], [5]]
chunk([1, 2, 3, 4, 5, 6, 7, 8], 2) --> [[1, 2, 3], [4, 5, 6], [7,8]]
chunk([1, 2, 3, 4, 5], 10) --> [[1, 2, 3, 4, 5]]

*/

const chunk = (array, size) => {
  let res = [];

  while (array.length > 0) {
    res.push(array.splice(0, size));
  }
  return res;
};

// const chunk = (array, size) => {
//   let result = [];

//   let subArr = [];
//   for (let i = 0; i < array.length; i++) {
//     if (subArr.length <= size) {
//       subArr.push(array[i]);
//     } else {
//       result.push(subArr);
//       subArr = [];
//     }
//   }
//   return result;
// };
