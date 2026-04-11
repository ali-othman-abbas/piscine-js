function nasa(N) {
  const result = []
  for (let i = 1; i <= N; i++) {
    if (i % 3 && i % 5) {
      result.push('NASA')
    } else if (i % 3) {
      result.push('NA')
    } else if (i % 5) {
      result.push('SA')
    } else {
      result.push(`${i}`)
    }
  }
  
  return result.join(" ")
}