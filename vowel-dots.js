var vowels = /([aeiou])/g;
function vowelDots(str) {
    return str.replace(vowels, "$1.");
}
