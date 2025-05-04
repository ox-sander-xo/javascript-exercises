const leapYears = function(year) {
let result = true
    if (year % 4 === 0 && year % 100 === 0) {
    result = year % 400 === 0
   } 
    else {
    result = year % 4 === 0 
    }
    return result;
}

// Do not edit below this line
module.exports = leapYears;
