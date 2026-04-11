function sums(num) {
  if (num == 0) {
    return []
  }
  const inner = (num, upTo = num) => {
    if (num === 0) {
      return [[]]
    }
    
    if (upTo === 0) {
      return []
    }
    
    const arr1 = sums(num, upTo - 1)
    const arr2 = sums(num - upTo, num - upTo)
    for (let i = 0; i < arr2.length; i++) {
      arr2[i].push(upTo)
    }
    
    return [...arr1, ...arr2]
  }
  inner(num)
}
