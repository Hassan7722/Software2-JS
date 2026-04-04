'use strict';

const dicecount = Number(prompt('How many dice?'));

let sum = 0;

for (let i = 0; i < dicecount; i++) {
  const roll = Math.floor(Math.random() * 6) + 1;
  sum = sum + roll;
}

document.querySelector('#target').innerHTML = `Sum of dice: ${sum}`;


