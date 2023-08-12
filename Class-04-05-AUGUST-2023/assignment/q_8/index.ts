export {};
function isLeapYear(year: number): boolean {
    return  (year % 4 === 0) ? true : false;
}

var userYear: number = 2024;

console.log(`${userYear} is${isLeapYear(userYear) ? '' : ' not'} a leap year.`);
