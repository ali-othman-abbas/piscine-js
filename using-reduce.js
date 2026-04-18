var adder = function (arr, sum) {
    if (sum === void 0) { sum = 0; }
    return arr.reduce(function (sum, num) { return (sum = sum + num); }, sum);
};
var sumOrMul = function (arr, sum) {
    if (sum === void 0) { sum = 0; }
    return arr.reduce(function (sum, num) { return (num % 2 == 0 ? (sum = sum * num) : (sum = sum + num)); }, sum);
};
var funcExec = function (funcs, x) {
    return funcs.reduce(function (x, func) { return (x = func(x)); }, x);
};
