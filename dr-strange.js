var dayStr = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday', 'secondMonday', 'secondTuesday', 'secondWednesday', 'secondThursday', 'secondFriday', 'secondSaturday', 'secondSunday'];
function addWeek(date) {
    var epoch = new Date('0001-01-01T00:00:00Z');
    var timeFromEpoch = new Date(Math.abs(date.getTime() - epoch.getTime()));
    var day = Math.trunc(timeFromEpoch.getTime() / (1000 * 60 * 60 * 24));
    return dayStr[day % 14];
}
function timeTravel(_a) {
    var date = _a.date, hour = _a.hour, minute = _a.minute, second = _a.second;
    date.setUTCHours(hour);
    date.setUTCMinutes(minute);
    date.setUTCSeconds(second);
    return date;
}
