function firstDayWeek(num, str) {
    if (num === 1) {
        return "01-01-".concat(str);
    }
    var dayTime = 24 * 60 * 60 * 1000;
    var date = new Date("".concat(str, "-01-01"));
    var weekDay = date.getUTCDay();
    if (weekDay === 0) {
        weekDay = 7;
    }
    date.setTime(date.getTime() - weekDay * dayTime + dayTime);
    num = num - 1;
    var result = new Date(date.getTime() + num * 7 * dayTime);
    var day = String(result.getUTCDate()).padStart(2, "0");
    var month = String(result.getUTCMonth() + 1).padStart(2, "0");
    var year = String(result.getUTCFullYear()).padStart(4, "0");
    return "".concat(day, "-").concat(month, "-").concat(year);
}
