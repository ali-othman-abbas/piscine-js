function getURL(str) {
    var _a;
    var regex = /https?:\/\/[^\s]+/g;
    return (_a = str.match(regex)) !== null && _a !== void 0 ? _a : [];
}
function greedyQuery(str) {
    var _a;
    var regex = /https?:\/\/[^\s]+/g;
    return (_a = str.match(regex)) !== null && _a !== void 0 ? _a : [];
}
function notSoGreedy(str) {
    var _a;
    var regex = /https?:\/\/[^\s]+/g;
    return (_a = str.match(regex)) !== null && _a !== void 0 ? _a : [];
}
