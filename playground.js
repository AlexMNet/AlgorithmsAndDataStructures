const remove_duplicates = (arr) => {
  let left = 1;

  for (let right = 1; right < arr.length; right++) {
    if (arr[right] !== arr[right - 1]) {
      arr[left] = arr[right];
      left++;
    }
  }
  return left;

  //return length of sub array with no duplicate
};
console.log(remove_duplicates([2, 3, 3, 3, 6, 9, 9])); //4
console.log(remove_duplicates([2, 2, 2, 11])); //2

[2, 3, 6, 9, 6, 9, 9];
l;
r;
