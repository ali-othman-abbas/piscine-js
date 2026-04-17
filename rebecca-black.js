function isFriday(date) {
    return date.getDay() === 5;
}
function isWeekend(date) {
    return date.getDay() === 6 || date.getDay() === 0;
}
function isLeapYear(date) {
    return date.getFullYear() % 4 === 0;
}
