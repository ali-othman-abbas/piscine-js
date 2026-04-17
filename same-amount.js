"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function sameAmount(str, regex1, regex2) {
    function countMatches(str, regex) {
        const regexG = (regex.global) ? regex : new RegExp(regex.source, regex.flags + 'g');
        let count = 0;
        while (regexG.exec(str) !== null) {
            count++;
        }
        return count;
    }
    return countMatches(str, regex1) === countMatches(str, regex2);
}
//# sourceMappingURL=same-amount.js.map