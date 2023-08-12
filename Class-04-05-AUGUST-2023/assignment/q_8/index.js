"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function isLeapYear(year) {
    return (year % 4 === 0) ? true : false;
}
var userYear = 2024;
console.log(`${userYear} is${isLeapYear(userYear) ? '' : ' not'} a leap year.`);
