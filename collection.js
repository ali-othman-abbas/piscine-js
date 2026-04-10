
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
  if (val instanceof Set) {
    return 'Set'
  } else if (val instanceof Map) {
    return 'Map'
  } else if (Array.isArray(val)) {
    return "Array"
  } else if (val === null) {
    return 'null'
  } else if (typeof val === 'undefined') {
    return 'undefined'
  }
  
  return (typeof val).charAt(0).toUpperCase() + (typeof val).slice(1)
}
// const objToArr = ()
const str = 'hello'
const arr = [1, 2, 1, 3]
const obj = { x: 45, y: 75, radius: 24 }
const set = new Set()
const map = new Map()
set.add(1)
set.add(2)
set.add(1)
set.add(3)
map.set('a', 1)
map.set('b', 2)
map.set(3, 'c')
map.set(4, 'd')
console.log(arrToSet(arr)) 
console.log(arrToStr(arr)) 
console.log(setToArr(set)) 
console.log(setToStr(set)) 
console.log(strToArr(str)) 
console.log(strToSet(str)) 
console.log(mapToObj(map)) 
console.log(objToArr(obj)) 
console.log(objToMap(obj)) 
console.log(arrToObj(arr)) 
console.log(strToObj(str))
console.log(superTypeOf(map)) 
console.log(superTypeOf(set)) 
console.log(superTypeOf(obj)) 
console.log(superTypeOf(str)) 
console.log(superTypeOf(666)) 
console.log(superTypeOf(NaN)) 
console.log(superTypeOf(arr)) 
console.log(superTypeOf(null)) 
console.log(superTypeOf(undefined))
console.log(superTypeOf(superTypeOf))