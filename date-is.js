var isValid = function (date) {
    return (date instanceof Date && !Number.isNaN(date.getTime())) ||
        (typeof date === "number" && !Number.isNaN(new Date(date).getTime()));
};
var isAfter = function (date1, date2) {
    if (typeof date1 === 'number') {
        date1 = new Date(date1);
    }
    if (typeof date2 === 'number') {
        date2 = new Date(date2);
    }
    return date1.getTime() > date2.getTime();
};
var isBefore = function (date1, date2) {
    if (!isValid(date1) || !isValid(date2)) {
        return false;
    }
    if (typeof date1 === 'number') {
        date1 = new Date(date1);
    }
    if (typeof date2 === 'number') {
        date2 = new Date(date2);
    }
    return date1.getTime() < date2.getTime();
};
var isFuture = function (date) {
    return isValid(date) && isAfter(date, new Date(Date.now()));
};
var isPast = function (date) {
    return isValid(date) && isBefore(date, new Date(Date.now()));
};
