function split(str, sep) {
  if (sep.length == 0) {
    return Array.from(str)
  }
  const arr = []
  for (let i = 0; i < str.length;) {
    let j = 0
    while (i + j < str.length) {
      while (i + j < str.length && str[i + j] !== sep[0]) j++
      if (i + j >= str.length) {
        arr.push(str.slice(i, i + j))
        break
      }
      let l = 0
      while (i + j + l < str.length && l < sep.length && str[i + j + l] === sep[l]) l++
      
      if (l === sep.length) {
        arr.push(str.slice(i, i + j))
        j = j + l
        break
      }
      j = j + l
    }
    i = i + j
  }
  return arr
}

function join(arr, sep) {
  word = ""
  for (let i = 0; i < arr.length; i++) {
    word = word + arr[i]
    if (i < arr.length - 1) {
      word = word + sep
    }
  }
  
  return word
}
