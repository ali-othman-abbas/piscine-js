function forEach<T>(arr: T[], func: (x:T) => void) {
  for (const ele of arr) {
    func(ele)
  }
}