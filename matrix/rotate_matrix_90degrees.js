// Rotate Matrix 90 degress

let matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

const rotate = (matrix) => {
  let n = matrix.length;
  //Turn columns into rows and vice versa
  for (let i = 0; i < n; i++) {
    for (let j = i; j < n; j++) {
      temp = matrix[i][j];
      matrix[i][j] = matrix[j][i];
      matrix[j][i] = temp;
    }
  }
  //Reverse each row See*** bellow
  for (let i = 0; i < n; i++) {
    matrix[i].reverse();
  }
  return matrix;
};

console.log(rotate(matrix));

/*
*** Another way to do this is. Using two converging pointers
for (let i = 0; i < n; i++) {
    for (let j = 0; j < n / 2; j++) {
      let temp = matrix[i][j];
      matrix[i][j] = matrix[i][n - 1 - j];
      matrix[i][n - 1 - j] = temp;
    }
  }

*/
