function sameAmount(str, regex1, regex2) {
    var regex1G = (regex1.global) ? regex1 : new RegExp(regex1.source, regex1.flags + 'g');
    var regex2G = (regex2.global) ? regex2 : new RegExp(regex2, regex2.flags + 'g');
    var matches1 = Array.from(str.matchAll(regex1G)).length;
    var matches2 = Array.from(str.matchAll(regex2G)).length;
    return matches1 === matches2;
}
