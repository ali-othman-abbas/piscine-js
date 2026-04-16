var tests = [];
var t = function (f) { return tests.push(f); };
// is the date a valid date?
var invalid = function (callback, ary) {
    if (ary === void 0) { ary = 1; }
    for (var _i = 0, _a = [
        "new Date('')",
        "new Date(NaN)",
        "''",
        "'2013-01-01'",
        "NaN",
    ]; _i < _a.length; _i++) {
        var s = _a[_i];
        if (callback.apply(void 0, Array(ary).fill(eval(s)))) {
            throw Error("".concat(callback.name, "(").concat(s, ") should be false"));
        }
    }
};
var isValid = function (date) { return date instanceof Date && !Number.isNaN(date.getTime()); };
var isAfter = function (date1, date2) {
    return date1.getTime() > date2.getTime();
};
var isBefore = function (date1, date2) {
    return date1.getTime() < date2.getTime();
};
var isFuture = function (date) {
    return isValid(date) && isAfter(date, new Date(Date.now()));
};
var isPast = function (date) {
    return isValid(date) && isBefore(date, new Date(Date.now()));
};
// isValid
