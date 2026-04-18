function map(arr, func) {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    result.push(func(arr[i], i, arr));
  }

  return result;
}

function flatMap(arr, func) {
  const result = map(arr, func)
  const flatResult = []
  for (let i = 0; i < result.length; i++) {
    if (Array.isArray(result[i])) {
      for (let j = 0; j < result[i].length; j++) {
        flatResult.push(result[i][j])
      }
    } else {
      flatResult.push(result[i])
    }
  }
  return flatResult
}

