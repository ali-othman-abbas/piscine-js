function sums(num) {
  const inner = (num, upTo = num) => {
    if (num === 0) {
      return [[]]
    }
    
    if (num < 0 || upTo === 0) {
      return []
    }
    
    const arr1 = inner(num, upTo - 1)
    const arr2 = inner(num - upTo, upTo)
    for (let i = 0; i < arr2.length; i++) {
      arr2[i].push(upTo)
    }
    
    
    return [...arr1, ...arr2]
  }
  return inner(num).slice(0, -1)
}
