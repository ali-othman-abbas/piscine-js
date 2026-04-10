const cutFirst = str => str.slice(2)
const cutLast = str => str.slice(0, -2)
const cutFirstLast = str => str.slice(2, -2)
const keepFirst = str => str.slice(0, 2)
const keepLast = str => str.slice(-2)
const keepFirstLast = str => `${keepFirst(str)}${keepLast(str)}`

const word = "1234567"

console.log(cutFirst(word))
console.log(cutLast(word))
console.log(cutFirstLast(word))
console.log(keepFirst(word))
console.log(keepLast(word))
console.log(keepFirstLast(word))