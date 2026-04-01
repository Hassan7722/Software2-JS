'use strict';

const year = Number(prompt('Please enter the year'));

let result;

if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
    result = `${year} is a leap year`;
} else {
    result = `${year} is not a leap year`;
}

document.querySelector('#target').innerHTML = result;