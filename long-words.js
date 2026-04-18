var longWords = function (arr) { return arr.every(function (ele) { return ele.length >= 5; }); };
var oneLongWord = function (arr) { return arr.some(function (ele) { return ele.length >= 10; }); };
var noLongWords = function (arr) { return arr.every(function (ele) { return ele.length < 7; }); };
