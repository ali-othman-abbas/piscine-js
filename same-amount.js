function sameAmount(str, regex1, regex2) {
    function countMatches(str, regex) {
        var regexG = (regex.global) ? regex : new RegExp(regex.source, regex.flags + 'g');
        var count = 0;
        while (regexG.exec(str) !== null) {
            count++;
        }
        return count;
    }
    return countMatches(str, regex1) === countMatches(str, regex2);
}
