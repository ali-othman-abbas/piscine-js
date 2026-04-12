var regex = /https?:\/\/[^\s]+/;
function getURL(str) {
    var _a;
    return (_a = str.match(new RegExp(regex.source, 'g'))) !== null && _a !== void 0 ? _a : [];
}
function greedyQuery(str) {
    var _a;
    var parameters = /\?([^\s=&]+=[^\s=&]+&){2,}[^\s=&]+=[^\s=&]+\b/;
    var combined = new RegExp("".concat(regex.source).concat(parameters.source), 'g');
    return (_a = str.match(combined)) !== null && _a !== void 0 ? _a : [];
}
function notSoGreedy(str) {
    var _a;
    var parameters = /\?(?:[^\s=&]+=[^\s=&]+&){1,2}[^\s=&]+=[^\s=&]+\b/;
    var combined = new RegExp("".concat(regex.source).concat(parameters.source), 'g');
    return (_a = str.match(combined)) !== null && _a !== void 0 ? _a : [];
}
