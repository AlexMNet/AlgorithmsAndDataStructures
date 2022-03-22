/*
In many problems dealing with an array (or a LinkedList), we are asked to find or calculate something among all the subarrays (or sublists) of a given size. For example, take a look at this problem:

Given an array, find the average of all subarrays of ‘K’ contiguous elements in it.
Let’s understand this problem with a real input:

Array: [1, 3, 2, 6, -1, 4, 1, 8, 2], K=5

Here, we are asked to find the average of all subarrays of ‘5’ contiguous elements in the given array. Let’s solve this:

For the first 5 numbers (subarray from index 0-4), the average is: (1+3+2+6-1)/5 => 2.2
(1+3+2+6−1)/5=>2.2
The average of next 5 numbers (subarray from index 1-5) is: (3+2+6-1+4)/5 => 2.8
(3+2+6−1+4)/5=>2.8
For the next 5 numbers (subarray from index 2-6), the average is: (2+6-1+4+1)/5 => 2.4
(2+6−1+4+1)/5=>2.4

…
Here is the final output containing the averages of all subarrays of size 5:

Output: [2.2, 2.8, 2.4, 3.6, 2.8]


// INPUT: Array of numbers, k (number)
// Output, array of all the averages
*/

// const array = [1, 3, 2, 6, -1, 4, 1, 8, 2];
// const k = 5;

// Brute force solution
//Time complexity O(N * K)

const find_average_of_subarrays = (array, k) => {
  const result = [];
  for (let i = 0; i < array.length - k + 1; i++) {
    let sum = 0.0;
    for (let j = i; j < i + k; j++) {
      sum += array[j];
    }
    result.push(sum / k);
  }
  return result;
};

// console.log(find_average_of_subarrays(array, k));

// Sliding Window Approach
// Time Conplexity O(N)
const array = [1, 3, 2, 6, -1, 4, 1, 8, 2];
const k = 5;

const find_average_of_subarrays = (array, k) => {
  result = [];
  let windowSum = 0.0;
  let windowStart = 0;

  for (let windowEnd = 0; windowEnd < array.length; windowEnd++) {
    windowSum += array[windowEnd];

    if (windowEnd >= k - 1) {
      result.push(windowSum / k);
      windowSum -= array[windowStart];
      windowStart += 1;
    }
  }

  return result;
};

console.log(find_average_of_subarrays(array, k));
