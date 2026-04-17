"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const dayStr = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday', 'secondMonday', 'secondTuesday', 'secondWednesday', 'secondThursday', 'secondFriday', 'secondSaturday', 'secondSunday'];
function addWeek(date) {
    const epoch = new Date('0001-01-01T00:00:00Z');
    const timeFromEpoch = new Date(Math.abs(date.getTime() - epoch.getTime()));
    const day = Math.trunc(timeFromEpoch.getTime() / (1000 * 60 * 60 * 24));
    return dayStr[day % 14];
}
function timeTravel({ date, hour, minute, second }) {
    date.setUTCHours(hour);
    date.setUTCMinutes(minute);
    date.setUTCSeconds(second);
    return date;
}
//# sourceMappingURL=dr-strange.js.map