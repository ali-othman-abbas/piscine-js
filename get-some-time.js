function firstDayWeek(num, str) {
    var date = new Date(0);
    date.setFullYear(Number(str));
    num = num - 1;
    date.setTime(num * 7 * 24 * 60 * 60 * 1000 + date.getTime());
    var day = String(date.getDate()).padStart(2, '0');
    var month = String(date.getMonth() + 1).padStart(2, '0');
    var year = date.getFullYear();
    return "".concat(day, "-").concat(month, "-").concat(year);
}
