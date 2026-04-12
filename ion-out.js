function ionOut(str) {
  const result = Array.from(str.matchAll(/\b([a-zA-Z]*t)ion\b/g)).map(
    m => m[1]
  )
  return result
}

const result = ionOut('attention, direction')
console.log(result)