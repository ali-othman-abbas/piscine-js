var filterShortStateName = function (arr) {
    return arr.filter(function (ele) { return ele.length < 7; });
};
var vowels = new Set(["a", "e", "i", "o", "u"]);
var filterStartVowel = function (arr) {
    return arr.filter(function (ele) { var _a; return vowels.has((_a = ele[0]) === null || _a === void 0 ? void 0 : _a.toLowerCase()); });
};
var filter5Vowels = function (arr) {
    return arr.filter(function (ele) {
        var count = 0;
        Array.from(ele).forEach(function (char) { return vowels.has(char.toLowerCase()) && count++; });
        return count >= 5;
    });
};
var filter1DistinctVowel = function (arr) {
    return arr.filter(function (ele) {
        var distinctVowls = new Set();
        Array.from(ele).forEach(function (char) {
            return vowels.has(char.toLowerCase()) && distinctVowls.add(char.toLowerCase());
        });
        return distinctVowls.size === 1;
    });
};
var multiFilter = function (arr) {
    return arr.filter(function (ele) {
        var _a;
        return ((_a = ele["capital"]) === null || _a === void 0 ? void 0 : _a.length) >= 8 &&
            !vowels.has(ele["name"][0].toLowerCase()) &&
            Array.from(ele["tag"]).filter(function (char) { return vowels.has(char.toLowerCase()); })
                .length >= 1 &&
            ele["region"] !== "South";
    });
};
