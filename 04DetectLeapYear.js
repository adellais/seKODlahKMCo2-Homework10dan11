console.log("Basic Challenge 04 : Create a function that return true if year is a leap year and false if it was not a leap year");

function isLeapYear(year) {
   return ((year % 400 === 0) || (year % 100 !== 0)) && ((year % 4) === 0);
}
console.log(isLeapYear(2023))