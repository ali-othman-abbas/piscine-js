function map<T, U>(arr: T[], func: (x: T, idx: number, arr: T[]) => U) {
  const result: U[] = [];
  for (let i = 0; i < arr.length; i++) {
    result.push(func(arr[i]!, i, arr));
  }

  return result;
}

function flatMap<T, U>(arr: T[], func: (x: T, idx: number, arr: T[]) => U|U[]) {
  const result = map(arr, func)
  const flatResult = []
  for (let i = 0; i < result.length; i++) {
    if (Array.isArray(result[i])) {
      for (let j = 0; j < result[i]!.length; j++) {
        flatResult.push(result[i]![j])
      }
    } else {
      flatResult.push(arr[i])
    }
  }
  return result.flat(1)
}