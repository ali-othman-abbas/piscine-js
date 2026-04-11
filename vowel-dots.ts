const vowels: RegExp = /([aeiou])/gi
function vowelDots(str: string) {
  return str.replace(vowels, "$1.")
}