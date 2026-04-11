function split(str, sep) {
  if (sep.length == 0) {
    return Array.from(str)
  }
  const arr = []
  let start = 0
  for (let i = 0; i < str.length;) {
    let j = 0
    while (j < sep.length && i + j < str.length && str[i + j] === sep[j]) j++
    if (j === sep.length) {
      arr.push(str.slice(start, i))
      i = i + j
      start = i
      continue
    }
    if (j > 0) {
      i = i + j
    } else {
      i++
    }
  }
  arr.push(str.slice(start))
  return arr
}

function join(arr, sep) {
  let word = ""
  for (let i = 0; i < arr.length; i++) {
    word = word + arr[i]
    if (i < arr.length - 1) {
      word = word + sep
    }
  }
  
  return word
}
