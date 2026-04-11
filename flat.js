const flat = (arr, result = []) => {
  for (const subArr of arr) {
    if (Array.isArray(subArr)) {
      flat(subArr, result)
    } else {
      result.push(subArr)
    }
  }
  
  return result
}