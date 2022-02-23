/* 
Define a function that returns th maximum sum of a subarray of size num. 

Input Array: [2, 6, 9, 2, 1, 8, 5, 6, 3] //length 9
Window: 3
                             _
maxSumArr([2, 6, 9, 2, 1, 8, 5, 6, 3], 3) // 19
*/

// Solution # 1 O(N)
const maxSumArr = (arr, window) => {
  let max = 0;
  let temp = 0;

  for (let i = 0; i < window; i++) {
    max += arr[i];
  }

  temp = max;

  for (let i = window; i < arr.length; i++) {
    temp = temp - arr[i - window] + arr[i];
    max = Math.max(temp, max);
  }

  return max;
};

// Naive solutions O(N2)
const maxSumArr = (arr, window) => {
  let max = 0;

  //arr.length - window prevents nested loop from calculating beyond the last sub array
  for (let i = 0; i < arr.length - window; i++) {
    let temp = 0;
    for (let j = 0; j < window; j++) {
      temp += arr[i + j];
    }

    if (temp > max) max = temp;
  }

  return max;
};
