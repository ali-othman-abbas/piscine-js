function every<T>(
  arr: T[],
  func: (x: T, idx: number, arr: T[]) => boolean,
): boolean {
  let bool = true
  for (let i = 0; i < arr.length; i++) {
    bool = bool || func(arr[i]!, i, arr)
  }
  
  return bool
}
function some<T>(
  arr: T[],
  func: (x: T, idx: number, arr: T[]) => boolean,
): boolean {
  let bool = false
  for (let i = 0; i < arr.length; i++) {
    bool = bool || func(arr[i]!, i, arr)
  }
  
  return bool
}

function none<T>(
  arr: T[],
  func: (x: T, idx: number, arr: T[]) => boolean,
): boolean {
  return !some(arr, func)
}