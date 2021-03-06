/*
You are visiting a farm to collect fruits. The farm has a single row of fruit trees. You will be given two baskets, and your goal is to pick as many fruits as possible to be placed in the given baskets.

You will be given an array of characters where each character represents a fruit tree. The farm has following restrictions:

Each basket can have only one type of fruit. There is no limit to how many fruit a basket can hold.
You can start with any tree, but you can’t skip a tree once you have started.
You will pick exactly one fruit from every tree until you cannot, i.e., you will stop when you have to pick from a third fruit type.
Write a function to return the maximum number of fruits in both baskets.

Example 1:

Input: Fruit=['A', 'B', 'C', 'A', 'C']
Output: 3
Explanation: We can put 2 'C' in one basket and one 'A' in the other from the subarray ['C', 'A', 'C']
Example 2:

Input: Fruit=['A', 'B', 'C', 'B', 'B', 'C']
Output: 5
Explanation: We can put 3 'B' in one basket and two 'C' in the other basket. 
This can be done if we start with the second letter: ['B', 'C', 'B', 'B', 'C']
*/

const fruits_into_baskets = (fruit) => {
  let fruitFrequency = {},
    windowStart = 0,
    maxFruits = 0;

  for (let windowEnd = 0; windowEnd < fruit.length; windowEnd++) {
    const lastFruit = fruit[windowEnd];
    fruitFrequency[lastFruit] = (fruitFrequency[lastFruit] || 0) + 1;

    while (Object.keys(fruitFrequency).length > 2) {
      const firstFruit = fruit[windowStart];
      fruitFrequency[firstFruit] -= 1;
      if (fruitFrequency[firstFruit] === 0) {
        delete fruitFrequency[firstFruit];
      }
      windowStart += 1;
    }

    maxFruits = Math.max(maxFruits, windowEnd - windowStart + 1);
  }
  return maxFruits;
};

console.log(
  `Maximum number of fruits: ${fruits_into_baskets(['A', 'B', 'C', 'A', 'C'])}`
); //3

console.log(
  `Maximum number of fruits: ${fruits_into_baskets([
    'A',
    'B',
    'C',
    'B',
    'B',
    'C',
  ])}`
); //5
