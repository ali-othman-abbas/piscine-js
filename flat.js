const flat = (arr, depth = 1, result = []) => {
  for (const subArr of arr) {
    if (Array.isArray(subArr) && depth > 0) {
      flat(subArr, depth - 1, result)
    } else {
      result.push(subArr)
    }
  }
  
  return result
}