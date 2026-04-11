const add4 = '+4'
const mul2 = '*2'
const findExpression = (number, num = 1, result = ['1']) => {
  if (number === num) {
    return result.join(" ")
  }
  if (num > number) return
  result.push(mul2)
  const first = findExpression(number, num * 2, result)
  if(first) return first
  result.pop()
  result.push(add4)
  const second = findExpression(number, num + 4, result)
  if(second) return second
  result.pop(add4)
  return
}