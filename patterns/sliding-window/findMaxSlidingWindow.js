/*
Given a large array of integers and a window size w, find the current max value
in the window as the window slides through the entire array.

*/

const findMaxSlidingWindow = (arr, w) => {
  let max = 0;
  let temp = 0;

  for (let i = 0; i < w; i++) {
    max += arr[i];
  }

  temp = max;

  for (let i = w; i < arr.length; i++) {
    temp = temp - arr[i - w] + arr[i];
    max = Math.max(temp, max);
  }

  return max;
};

findMaxSlidingWindow([1, 2, 3, 4, 3, 2, 1, 2, 5], 4); //12
findMaxSlidingWindow([1, 2, 3, 4, 3, 2, 1, 2, 5], 3); //10
findMaxSlidingWindow([1, 2, 3, 4, 3, 2, 1, 2, 5], 5); //14
