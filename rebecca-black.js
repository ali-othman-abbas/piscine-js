"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function isFriday(date) {
    return date.getDay() === 5;
}
function isWeekend(date) {
    return date.getDay() === 6 || date.getDay() === 0;
}
function isLeapYear(date) {
    return date.getFullYear() % 4 === 0;
}
function isLastDayOfMonth(date) {
    switch (date.getMonth()) {
        case 0:
        case 2:
        case 4:
        case 6:
        case 7:
        case 9:
        case 11:
            return date.getDate() == 31;
        case 1:
            return isLeapYear(date) && date.getDate() === 29 || !isLeapYear(date) && date.getDate() === 28;
        default:
            return date.getDate() === 30;
    }
}
//# sourceMappingURL=rebecca-black.js.map