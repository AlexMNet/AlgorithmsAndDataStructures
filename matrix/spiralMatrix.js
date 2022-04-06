/* 
Given a m x n matrix, return all elements of the matrix in spiral order
*/

let matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

//Output [1, 2, 3, 6, 9, 8, 7, 4, 5]

const spiralOrder = (matrix) => {
  const result = [];
  let left = 0;
  let top = 0;
  let right = matrix.length - 1;
  let bottom = matrix.length - 1;
  let direction = 'right';

  while (left <= right && top <= bottom) {
    if (direction === 'right') {
      for (let i = left; i <= right; i++) {
        result.push(matrix[top][i]);
      }
      top += 1;
      direction = 'down';
    }
    if (direction === 'down') {
      for (let i = top; i <= bottom; i++) {
        result.push(matrix[i][right]);
      }
      right -= 1;
      direction = 'left';
    }
    if (direction === 'left') {
      for (let i = right; i >= left; i--) {
        result.push(matrix[bottom][i]);
      }
      bottom -= 1;
      direction = 'up';
    }
    if (direction === 'up') {
      for (let i = bottom; i >= top; i--) {
        result.push(matrix[i][left]);
      }
      left += 1;
      direction = 'right';
    }
  }
  return result;
};

console.log(spiralOrder(matrix));
