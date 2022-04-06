// function solution(a, b, k) {
//   let tinyPairs = 0;

//   for (let i = 0; i < a.length; i++) {
//     if (parseInt(a[i].toString() + b[a.length - 1 - i].toString()) < k) {
//       tinyPairs++;
//     }
//   }

//   return tinyPairs;
// }

// function solution(a, b) {
//   let smallestDiff = Infinity;
//   let windowStart = 0;
//   let maxLength = 0;
//   let additions = 0;

//   //Get the smallest difference between numbers in array A to find out what the progression is
//   for (let i = 0; i < a.length - 1; i++) {
//     smallestDiff = Math.min(smallestDiff, a[i + 1] - a[i]);
//   }

//   for (let windowEnd = 0; windowEnd < a.length; windowEnd++) {
//     maxLength = Math.max(maxLength, windowEnd - windowStart + 1 + additions);
//     console.log(additions);

//     if (a[windowEnd + 1] - a[windowEnd] !== smallestDiff) {
//       if (b.includes(a[windowEnd] + smallestDiff)) {
//         additions += 1;
//       } else {
//         additions = 0;
//         windowStart = windowEnd + 1;
//       }
//     }
//   }
//   return maxLength;
// }

// function solution(a, b) {
//   let smallestDiff = Infinity;
//   let windowStart = 0;
//   let maxLength = 0;
//   const array = a.concat(b).sort((a, b) => a - b);

//   for (let i = 0; i < a.length - 1; i++) {
//     smallestDiff = Math.min(smallestDiff, a[i + 1] - a[i]);
//   }

//   for (let windowEnd = 0; windowEnd < array.length; windowEnd++) {
//     if (array[windowEnd + 1] - array[windowEnd] !== smallestDiff) {
//       windowStart = windowEnd + 1;
//     }
//     maxLength = Math.max(maxLength, windowEnd - windowStart + 1);
//   }
//   return maxLength;
// }

// console.log([0, 4, 8, 16].concat([0, 2, 6, 12, 14, 20]).sort((a, b) => a - b));

// function solution(a, b) {
//   let smallestdiff = Infinity;
//   let i = 0;
//   let j = 0;
//   const result = [];

//   for (let i = 0; i < a.length - 1; i++) {
//     smallestdiff = Math.min(smallestdiff, a[i + 1] - a[i]);
//   }

//   result.push(a[i]);
//   i++;
//   while (i < a.length && j < b.length) {
//     if (a[i] - a[i - 1] === smallestdiff) {
//       result.push[a[i]];
//       i++;
//     } else if (b[j] - a[i - 1] === smallestdiff) {
//       result.push(b[j]);
//       j++;
//     } else {
//       i++;
//       j++;
//     }
//   }
//   return result;
// }
// console.log(solution([0, 4, 8, 16], [0, 2, 6, 12, 14, 20]));

// var longestArithSeqLength = function (A) {
//   const n = A.length;
//   const dp = [];
//   dp[0] = new Map();

//   let max = 0;

//   for (let i = 1; i < n; i++) {
//     const newMap = new Map();

//     for (let j = 0; j < i; j++) {
//       const diff = A[i] - A[j];
//       const prevMap = dp[j];

//       const len = (prevMap.get(diff) || 1) + 1;

//       newMap.set(diff, len);

//       max = Math.max(max, newMap.get(diff));
//       console.log(newMap);
//     }

//     dp[i] = newMap;
//   }

//   return max;
// };

// let a = [0, 4, 8, 16];
// let b = [0, 2, 6, 12, 14, 20];
// let a = [5, 7, 13, 14];
// let b = [9, 11, 15];
// [0, 2, 4, 6, 8, 12, 14, 16, 20];
// const solution = (a, b) => {
//   const array = [...new Set(a.concat(b).sort((a, b) => a - b))];
//   let max = 0,
//     diff = 0,
//     sequence;

//   for (let i = 0; i < array.length; i++) {
//     for (let j = i + 1; j < array.length; j++) {
//       diff = array[j] - array[i];
//       sequence = [array[i], array[j]];
//       for (let k = j + 1; k < array.length; k++) {
//         if (sequence[sequence.length - 1] + diff === array[k]) {
//           sequence.push(array[k]);
//         }
//       }
//       max = Math.max(max, sequence.length);
//     }
//   }

//   return max;
// };

// const solution = (a, b) => {
//   //Combine both arrays, remove duplicates, and sort
//   const arr = [...new Set(a.concat(b).sort((a, b) => a - b))];

//   let diff = 0,
//     sequence,
//     max = 0;

//   for (let i = 0; i < arr.length; i++) {
//     for (let j = i + 1; j < arr.length; j++) {
//       //Check the diff of the first two elements and see if a sequence can be created with it, then increment to the next two
//       diff = arr[j] - arr[i];
//       sequence = [arr[i], arr[j]];
//       for (let k = j + 1; k < arr.length; k++) {
//         //if the last ele in the sequence + the diff = the third element push to sequence.
//         if (sequence[sequence.length - 1] + diff === arr[k]) {
//           sequence.push(arr[k]);
//         }
//       }
//       //The max will equal the length of the sequence arr
//       max = Math.max(max, sequence.length);
//     }
//   }
//   return max;
// };

// console.log(solution(a, b));
// console.log(solution([0, 4, 8, 16], [0, 2, 6, 12, 14, 20]));

//ZIG ZAG

// let numbers = [1, 2, 1, 3, 4];
// 1 < 2 > 1;
// 2 > 1 < 3;

// function solution(numbers) {
//   let result = [];
//   for (let i = 0; i < numbers.length - 2; i++) {
//     if (
//       (numbers[i] < numbers[i + 1] && numbers[i + 1] > numbers[i + 2]) ||
//       (numbers[i] > numbers[i + 1] && numbers[i + 1] < numbers[i + 2])
//     ) {
//       result.push(1);
//     } else {
//       result.push(0);
//     }
//   }
//   return result;
// }

// console.log(solution(numbers));
// let a = [1, 3, 5, 6, 4, 2];
// let a = [1, 3, 5, 6, 4, 2];
// function solution(a) {
//   let start = 0,
//     end = a.length - 1,
//     result = [];

//   while (start <= end) {
//     if (start === end) {
//       result.push(a[start]);
//       break;
//     }
//     result.push(a[start]);
//     start++;
//     result.push(a[end]);
//     end--;
//   }

//   for (let i = 0; i < result.length - 1; i++) {
//     if (!(result[i] < result[i + 1])) {
//       return false;
//     }
//   }
//   return true;
// }

// console.log(solution(a));
// 123;

// function solution(a, m, k) {
//   let pairs = 0;
//   for (let i = 0; i < a.length - 3; i++) {
//     let result = [];
//     for (let j = i; j < m + i; j++) {
//       result.push(a[j]);
//     }
//     console.log(result);
//     for (let x = 0; x < result.length - 1; x++) {
//       for (let l = x + 1; l < result.length; l++) {
//         console.log(result[x], result[l]);
//         if (result[x] + result[l] === k) {
//           console.log('A Pair!');
//           pairs += 1;
//         }
//       }
//     }
//   }
//   return pairs;
// }

// console.log(solution([2, 4, 7, 5, 3, 5, 8, 5, 1, 7], 4, 10));
