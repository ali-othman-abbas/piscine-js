function sameAmount(str, regex1, regex2) {
    var matches1 = Array.from(str.matchAll(regex1)).length;
    var matches2 = Array.from(str.matchAll(regex2)).length;
    return matches1 === matches2;
}
