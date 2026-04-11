const triangle = (depth, i = 1, result = []) => {
  if (i === depth + 1) {
    return result.join("")
  }

  if (i < depth) {
    result.push([...'*'.repeat(i), '\n'].join(""))
  } else {
    result.push([...'*'.repeat(i)].join(""))
  }
  
  return triangle(depth, i + 1, result)
}
