const chunk = (array, size) => {
  let result = [];

  let subArr = [];
  for (let i = 0; i < array.length; i++) {
    if (subArr.length <= size) {
      subArr.push(array[i]);
    } else {
      result.push(subArr);
      subArr = [];
    }
  }
  return result;
};

const chunk = (array, size) => {
  let result = [];

  while (array.length > 0) {
    result.push(array.splice(0, size));
  }

  return result;
};
