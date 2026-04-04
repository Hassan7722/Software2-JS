'use strict';

const numbers = [];

while (true) {
  const num = Number(prompt('Enter a number: '));

  if (num === 0) {
    break;
  } else {
    numbers.push(num);
  }
}

numbers.sort((a, b) => b - a);

for (let num of numbers) {
  console.log(num);
}