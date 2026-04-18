function forEach<T>(arr: T[], func: (x:T, idx: number, arr: T[]) => void) {
  for (let i = 0; i < arr.length; i++) {
    func(arr[i]!, i, arr)
  }
}