"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const regex = /https?:\/\/[^\s]+/;
function getURL(str) {
    return str.match(new RegExp(regex.source, 'g')) ?? [];
}
function greedyQuery(str) {
    const parameters = /https?:\/\/[^\s]+\?([^\s=&]+=[^\s=&]+&){2,}[^\s=&]+=[^\s=&]+(?=\s|$)/g;
    return str.match(parameters) ?? [];
}
function notSoGreedy(str) {
    const parameters = /https?:\/\/[^\s]+\?(?:[^\s=&]+=[^\s=&]+&){1,2}[^\s=&]+=[^\s=&]+(?=\s|$)/g;
    return str.match(parameters) ?? [];
}
//# sourceMappingURL=greedy-url.js.map