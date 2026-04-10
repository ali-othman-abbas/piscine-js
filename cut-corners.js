function floor(num) {
  return num - (num % 1)
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
  if (num < 0) {
    return ceil(num)
  } else {
    return floor(num)
  }
}
