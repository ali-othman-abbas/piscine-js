const pyramid = (char, depth, i = 1, spaceNum = depth - 1, charNums = 1, result = []) => {
  if (i == depth + 1) {
    return result.join("")
  }
  
  row = [..." ".repeat(spaceNum), ...char.repeat(charNums)]
  if (i < depth) {
    row.push('\n')
  }
  result.push(row.join(""))
  return pyramid(char, depth, i + 1, spaceNum - 1, charNums + 2, result)
}

console.log(pyramid("#", 30))