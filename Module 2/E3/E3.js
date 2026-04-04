'use strict';

const dogs = [];

for (let i = 0; i < 5; i++) {
  const dog_name = prompt("Enter dog name");
  dogs.push(dog_name);
}

dogs.sort();
dogs.reverse();

let html = "<ul>";

for (let i = 0; i < dogs.length; i++) {
  html += "<li>" + dogs[i] + "</li>";
}

html += "</ul>";

document.querySelector('#target').innerHTML = html;
