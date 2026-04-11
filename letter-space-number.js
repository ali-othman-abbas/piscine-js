function letterSpaceNumber(str) {
    var result = str.match(/[a-zA-Z] [0-9](?=[^a-zA-Z0-9])/g);
    return result === null ? [] : result;
}
