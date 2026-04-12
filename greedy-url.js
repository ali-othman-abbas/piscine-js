var regex = /https?:\/\/[^\s]+/;
function getURL(str) {
    var _a;
    return (_a = str.match(new RegExp(regex.source, 'g'))) !== null && _a !== void 0 ? _a : [];
}
function greedyQuery(str) {
    var _a;
    var parameters = /\bhttps?:\/\/[^\s]+\?([^\s=&]+=[^\s=&]+&){2,}[^\s=&]+=[^\s=&]+(?=\s|$)/g;
    return (_a = str.match(parameters)) !== null && _a !== void 0 ? _a : [];
}
function notSoGreedy(str) {
    var _a;
    var parameters = /\bhttps?:\/\/[^\s]+\?(?:[^\s=&]+=[^\s=&]+&){1,2}[^\s=&]+=[^\s=&]+(?=\s|$)/g;
    return (_a = str.match(parameters)) !== null && _a !== void 0 ? _a : [];
}
var result = notSoGreedy('http://hummm/how?how=come&same=[123,21]&you=nextperson&id=123312&next=123DSAD&ok=true&notOk=true');
console.log(result);
