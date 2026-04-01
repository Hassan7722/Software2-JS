'use strict';

const num1 = +(prompt('Enter first number'));
const num2 = +prompt('Enter second number');
const num3 = +prompt('Enter third number');

const sum = num1 + num2 + num3;
const product = num1 * num2 * num3;
const average = sum / 3;

document.querySelector('#sum').innerHTML = `Sum: ${sum}`;
document.querySelector('#product').innerHTML = `Product: ${product}`;
document.querySelector('#average').innerHTML = `Average: ${average}`;
