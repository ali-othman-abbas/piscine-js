function filter<T>(arr: T[], func: (x: T, idx: number, arr: T[]) => boolean) {
  const result = []
  for (let i = 0; i < arr.length; i++) {
    func(arr[i]!, i, arr) && result.push(arr[i])
  }
  
  return result
}

function reject<T>(arr: T[], func: (x: T, idx: number, arr: T[]) => boolean) {
  const result = []
  for (let i = 0; i < arr.length; i++) {
    !func(arr[i]!, i, arr) && result.push(arr[i])
  }
  
  return result
}

function partition<T>(arr: T[], func: (x: T, idx: number, arr: T[]) => boolean) {
  const good: T[] = []
  const bad: T[] = []
  for (let i = 0; i < arr.length; i++) {
    func(arr[i]!, i, arr) ? good.push(arr[i]!) : bad.push(arr[i]!)
  }
  
  return [good, bad]
}