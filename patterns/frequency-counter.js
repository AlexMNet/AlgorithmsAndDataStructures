/* 
🔵🔵🔵🔵🔵🔵🔵🔵🔵🔵🔵🔵🔵🔵🔵🔵🔵🔵🔵🔵🔵🔵🔵🔵🔵🔵🔵🔵🔵🔵🔵🔵🔵🔵🔵🔵🔵
Problem # 1
🔵🔵🔵🔵🔵🔵🔵🔵🔵🔵🔵🔵🔵🔵🔵🔵🔵🔵🔵🔵🔵🔵🔵🔵🔵🔵🔵🔵🔵🔵🔵🔵🔵🔵🔵🔵🔵
write a function called sameFrequency. Given two positive integers,
find out if the two numbers have the same frequency of digits 

sample input:

sameFrequency(182, 281) //true
sameFrequency(34, 14) //false
sameFrequency(3589578, 5879385) //true
sameFrequency(22, 222) //false

*/

const sameFrequency = (n1, n2) => {
  let num1Map = {};
  let num2Map = {};

  let num1Arr = n1.toString().split('');
  let num2Arr = n2.toString().split('');

  if (num1Arr.length !== num2Arr.length) return false;

  for (let num of num1Arr) {
    num1Map[num] = (num1Map[num] || 0) + 1;
  }

  for (let num of num2Arr) {
    num2Map[num] = (num2Map[num] || 0) + 1;
  }

  for (num in num1Map) {
    if (!num in num2Map) return false;
    if (num1Map[num] !== num2Map[num]) return false;
  }

  return true;
};

//refactor above by creating helper functions

const genMap = (arr) => {
  const map = {};
  for (let x of arr) {
    map[x] = (map[x] || 0) + 1;
  }

  return map;
};

const sameFrequency = (n1, n2) => {
  let num1Map = genMap(n1.toString().split(''));
  let num2Map = genMap(n2.toString().split(''));

  if (Object.keys(num1Map).length !== Object.keys(num2Map).length) return false;

  for (num in num1Map) {
    if (!num in num2Map) return false;
    if (num1Map[num] !== num2Map[num]) return false;
  }

  return true;
};

/* 
🔵🔵🔵🔵🔵🔵🔵🔵🔵🔵🔵🔵🔵🔵🔵🔵🔵🔵🔵🔵🔵🔵🔵🔵🔵🔵🔵🔵🔵🔵🔵🔵🔵🔵🔵🔵🔵
Problem # 2
🔵🔵🔵🔵🔵🔵🔵🔵🔵🔵🔵🔵🔵🔵🔵🔵🔵🔵🔵🔵🔵🔵🔵🔵🔵🔵🔵🔵🔵🔵🔵🔵🔵🔵🔵🔵🔵
Implement a function called, areThereDuplicates which accepts  a variable number of args,
and checks whether there are any duplicates among the arguments passed in. 

areThereDuplicates(1, 2, 3) //false
areThereDuplicates(1, 2, 2) //true
areThereDuplicates('a', 'b', 'c', 'a') //true

*/

const areThereDuplicates = (...args) => {
  const elementMap = {};

  for (ele of args) {
    elementMap[ele] = (elementMap[ele] || 0) + 1;
  }

  for (ele of Object.values(elementMap)) {
    if (ele > 1) return true;
  }
  return false;
};
