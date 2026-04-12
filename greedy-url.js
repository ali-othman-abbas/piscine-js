var authority = /(?:[\w-]+\.)+[\w-]+/;
var path = /(?:\/[\w-]+)*\/?/;
function getURL(str) {
    var _a;
    var parameters = /(?:\?(?:[\w-]+=[\w-]+&)*[\w-]+=[\w-]+)?/;
    var regex = new RegExp("https?://".concat(authority.source).concat(path.source).concat(parameters.source), 'g');
    return (_a = str.match(regex)) !== null && _a !== void 0 ? _a : [];
}
function greedyQuery(str) {
    var _a;
    var greedyParameters = /\?(?:[\w-]+=[\w-]+&){2,}[\w-]+=[\w-]+/;
    var regex = new RegExp("https?://".concat(authority.source).concat(path.source).concat(greedyParameters.source), 'g');
    return (_a = str.match(regex)) !== null && _a !== void 0 ? _a : [];
}
function notSoGreedy(str) {
    var _a;
    var notSoGreedy = /\?(?:[\w-]+=[\w-]+&){1,2}[\w-]+=[\w-]+/;
    var regex = new RegExp("https?://".concat(authority.source).concat(path.source).concat(notSoGreedy.source), 'g');
    return (_a = str.match(regex)) !== null && _a !== void 0 ? _a : [];
}
