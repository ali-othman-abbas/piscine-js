"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function letterSpaceNumber(str) {
    let result = str.match(/[a-zA-Z] [0-9](?=[^a-zA-Z0-9]|$)/g);
    return result === null ? [] : result;
}
//# sourceMappingURL=letter-space-number.js.map