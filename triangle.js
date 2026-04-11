const triangle = (char, depth, i = 1, result = []) => {
  if (i === depth + 1) {
    return result.join("")
  }

  row = [...char.repeat(i)]
  if (i < depth) {
    row.push("\n")
  }
  result.push(row.join(""))
  
  return triangle(depth, i + 1, result)
}

console.log(triangle('#', 4))