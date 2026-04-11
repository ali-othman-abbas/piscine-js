function floor(num) {
  const base = trunc(num)
  return num >= 0 ? base : base - 1
}

function ceil(num) {
  return floor(num) + 1
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
