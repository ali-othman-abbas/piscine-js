var citiesOnly = function (arr) {
    return arr.map(function (ele) { return ele["city"]; });
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
    var trimmed = trimTemp(arr);
    var deg = fahrenheitToCelsius(trimmed.map(function (ele) { return ele["temperature"]; }));
    var cap = upperCasingStates(trimmed.map(function (ele) { return ele["state"]; }));
    return trimmed.map(function (ele, idx) { return "".concat(deg[idx], "elsius in ").concat(ele["city"], ", ").concat(cap[idx]); });
}
