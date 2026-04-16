var isValid = function (date) {
    return (date instanceof Date && !Number.isNaN(date.getTime())) ||
        (typeof date === "number" && !Number.isNaN(new Date(date).getTime()));
};
var isAfter = function (date1, date2) { return date1.getTime() > date2.getTime(); };
var isBefore = function (date1, date2) {
    return date1.getTime() < date2.getTime();
};
var isFuture = function (date) {
    return isValid(date) && isAfter(date, new Date(Date.now()));
};
var isPast = function (date) {
    return isValid(date) && isBefore(date, new Date(Date.now()));
};
