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

// console.log(solution([0, 4, 8, 16], [0, 2, 6, 12, 14, 20]));
