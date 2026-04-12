var regex = /https?:\/\/[^\s]+/;
function getURL(str) {
    var _a;
    return (_a = str.match(new RegExp(regex.source, 'g'))) !== null && _a !== void 0 ? _a : [];
}
function greedyQuery(str) {
    var _a;
    var parameters = /\bhttps?:\/\/[^\s]+\?([^\s=&]+=[^\s=&]+&){2,}[^\s=&]+=[^\s=&]+\b/g;
    return (_a = str.match(parameters)) !== null && _a !== void 0 ? _a : [];
}
function notSoGreedy(str) {
    var _a;
    var parameters = /\bhttps?:\/\/[^\s]+\?(?:[^\s=&]+=[^\s=&]+&){1,2}[^\s=&]+=[^\s=&]+\b/g;
    return (_a = str.match(parameters)) !== null && _a !== void 0 ? _a : [];
}
