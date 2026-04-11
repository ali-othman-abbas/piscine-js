const triangle = (depth, i = 1, result = []) => {
  if (i === depth + 1) {
    return result
  }

  result.push('*'.repeat(i) )
  result.push("\n")
  
  return triangle(depth, i + 1, result)
}

console.log(triangle(5))