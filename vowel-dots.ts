const vowels: RegExp = /([aeiou])/g
function vowelDots(str: string) {
  return str.replace(vowels, "$1.")
}