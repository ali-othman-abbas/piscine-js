function floor(num) {
  const base = trunc(num)
  if (num == base) {
    return base
  }
  return num >= 0 ? base : base - 1
}

function ceil(num) {
  const base = trunc(num)
  if (num == base) {
    return base
  }
  return num >= 0 ? base + 1 : base
}

function round(num) {
  if (Math.abs(floor(num) - num) < 0.5) {
    return floor(num)
  } else {
    return ceil(num)
  }
}

function trunc(num) {
  let sign = 1
  if (num < 0) {
    num = -num
    sign = -1
  }
  
  let result = 0
  let i = 0
  while (i <= num) {
    let j = 1
    while (i + j <= num) {
      j = j * 2
    }
    
    if (j > 1) {
      result = i + (j/2)
      i = i + (j/2)
    } else {
      i++
    }
  }
  
  return sign * result
}

const nums = [3.7, -3.7, 3.1, -3.1]
console.log(nums.map(round))
console.log(nums.map(floor))
console.log(nums.map(trunc))
console.log(nums.map(ceil))