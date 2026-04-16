function nestedArrayReverser(words) {
    var _a;
    words.reverse();
    for (var i = 0; i < words.length; i++) {
        (_a = words[i]) === null || _a === void 0 ? void 0 : _a.reverse();
    }
    var result = words.flat(Infinity).join(" ");
    return result;
}
console.log(nestedArrayReverser([
    ["hello", "world"],
    ["this", "is"],
    ["a", "test"],
]));
console.log(nestedArrayReverser([]));
