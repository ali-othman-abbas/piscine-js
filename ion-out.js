function ionOut(str) {
  return str.match(/[a-zA-Z]*t(?=ion)/g)
}

const result = ionOut("action action tion executation")
console.log(result)