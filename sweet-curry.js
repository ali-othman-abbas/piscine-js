var mult2 = function (a) { return function (b) { return a * b; }; };
var add3 = function (a) { return function (b) { return function (c) { return a + b + c; }; }; };
var sub4 = function (a) { return function (b) { return function (c) { return function (d) {
    return a - b - c - d;
}; }; }; };
