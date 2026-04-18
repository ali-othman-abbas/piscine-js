function map<T, U>(arr: T[], func: (x: T, idx: number, arr: T[]) => U) {
  const result: U[] = []
  for (let i = 0; i < arr.length; i++) {
    result.push(func(arr[i]!, i, arr))
  }
  
  return result
}

