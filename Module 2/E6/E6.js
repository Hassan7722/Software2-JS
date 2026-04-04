'use strict';

function rolldie() {
  return Math.floor(Math.random() * 6) + 1;
}

let result = 0;

while (result !== 6) {
  result = rolldie();
  console.log(result);
  document.querySelector('#target').innerHTML += `<li>${result}</li>`;}




