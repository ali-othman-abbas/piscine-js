function sums(num) {
  const solutionSet = []
  const inner = (num, start = 1, arr = []) => {
    if (num === 0) {
      return solutionSet.push(Array.from(arr))
    }
    for (let i = start; i <= num; i++) {
      arr.push(i)
      inner(num - i, i, arr)
      arr.pop(i)
    }
  }
  inner(num)
  return solutionSet.slice(0, -1)
}
