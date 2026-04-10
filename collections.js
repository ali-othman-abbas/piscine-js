
const arrToSet = (arr) => new Set(arr)
const arrToStr = (arr) => arr.join("")
const setToArr = (s) => [...s]
const setToStr = (s) => [...s].join("")
const strToArr = (s) => s.split("")
const strToSet = (s) => new Set(s)
const mapToObj = (m) => Object.fromEntries(m)
const objToArr = (obj) => Object.values(obj)
const objToMap = (obj) => new Map(Object.entries(obj))
const arrToObj = (arr) => { return { ...arr } }
const strToObj = (str) => { return { ...str } }

const superTypeOf = function (val) {
  if (val === null || typeof val === 'undefined') {
    return `${val}`
  }
  return val.constructor.name
}
