'use strict';

const numbers = [];

for (let i = 0; i < 5; i++) {
  const num = Number(prompt('Enter number'));
  numbers.push(num);
}

for (let i = 4; i >= 0 ; i--) {
  console.log(numbers[i]);
}