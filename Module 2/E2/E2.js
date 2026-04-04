'use strict';

const count = Number(prompt('Enter number of participants'));

const participants = [];

for (let i = 0; i < count; i++) {
  const name = prompt('Enter name of participant');
  participants.push(name);
}

participants.sort();

let html = '<ol>';

for (let i = 0; i < participants.length; i++) {
  html += `<li>${participants[i]}</li>`;
}

html += '</ol>';

document.querySelector('#target').innerHTML = html;