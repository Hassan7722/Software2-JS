'use strict';

function even(array) {
  const even_numbers = [];

  for (let number of array) {
    if (number % 2 === 0) {
      even_numbers.push(number);
    }
  }

  return even_numbers;
}

const example = [2, 7, 4];

const result = even(example);

console.log(example);
console.log(result);