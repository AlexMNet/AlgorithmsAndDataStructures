//Write a function that accepts a string.
//Fn should capitalize the 1st letter of each word in the string
//return the result

const capitalize = (str) =>
  str
    .split(' ')
    .map((word) => word[0].toUpperCase() + word.slice(1, word.length))
    .join(' ');

console.log(capitalize('a short sentance'));

/*
one liner" soltuion above

1) split the sentance at every space to create an array of each word
2) use the map function to return a new array in which you:
    Uppercase the first letter of each word and concatonate the rest of the word to the uppercase letter
3) join the array of words with a space in between 

*/
