var vowels = /([aeiou])/gi;
function vowelDots(str) {
    return str.replace(vowels, "$1.");
}
var result = vowelDots('Algorithm');
console.log(result);
