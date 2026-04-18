var citiesOnly = function (arr) {
    return arr.map(function (ele) { return ele["temperature"]; });
};
function upperCasingStates(arr) {
    return arr.map(function (ele) { return ele.split(" ").map(function (subEle) { return subEle.toUpperCase().charAt(0) + subEle.slice(1); }).join(" "); });
}
function fahrenheitToCelsius(arr) {
    return arr.map(function (ele) {
        var num = Number(ele.slice(0, -2));
        return "".concat((5 / 9) * (num - 32), "\u00B0C");
    });
}
function trimTemp(arr) {
    return arr.map(function (ele) {
        var _a;
        ele['temperature'] = (_a = ele['temperature']) === null || _a === void 0 ? void 0 : _a.trim();
        return ele;
    });
}
function tempForecasts(arr) {
    var deg = fahrenheitToCelsius(arr.map(function (ele) { return ele["temperature"]; }));
    var cap = upperCasingStates(arr.map(function (ele) { return ele["state"]; }));
    return arr.map(function (ele, idx) { return "".concat(deg[idx], "elsius in ").concat(ele["city"], ", ").concat(cap[idx]); });
}
