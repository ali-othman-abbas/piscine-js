function firstDayWeek(num, str) {
    if (num == 1) {
        return "01-01-".concat(str);
    }
    var milliInDay = 24 * 60 * 60 * 1000;
    var epochMonday = new Date(0);
    epochMonday.setTime(epochMonday.getTime() - 3 * milliInDay);
    var startOfYear = new Date(0);
    startOfYear.setFullYear(Number(str));
    var diff = Math.abs(new Date(epochMonday.getTime() - startOfYear.getTime()).getTime());
    var daysDiff = Math.trunc(diff / milliInDay);
    var rem = daysDiff % 7;
    // + (daysDiff - rem) * milliInDay
    var StartOfYearMonday = new Date(epochMonday.getTime());
    if (epochMonday.getTime() > startOfYear.getTime()) {
        StartOfYearMonday.setTime(StartOfYearMonday.getTime() - (daysDiff - rem + 7) * milliInDay);
    }
    else {
        StartOfYearMonday.setTime(StartOfYearMonday.getTime() + (daysDiff - rem) * milliInDay);
    }
    num = num - 1;
    var result = new Date(StartOfYearMonday.getTime() + num * 7 * milliInDay);
    var day = String(result.getUTCDate()).padStart(2, "0");
    var month = String(result.getUTCMonth() + 1).padStart(2, "0");
    var year = String(result.getUTCFullYear()).padStart(4, "0");
    return "".concat(day, "-").concat(month, "-").concat(year);
}
