function fold<T>(
  arr: T[],
  func: (x: T, y: T, idx: number, arr: T[]) => T,
  accumulator: T,
) {
  for (let i = 0; i < arr.length; i++) {
    accumulator = func(accumulator, arr[i]!, i, arr);
  }

  return accumulator;
}
function foldRight<T>(
  arr: T[],
  func: (x: T, y: T, idx: number, arr: T[]) => T,
  accumulator: T,
) {
  return fold(arr.reverse(), func, accumulator);
}
function reduce<T>(
  arr: T[],
  func: (x: T, y: T, idx: number, arr: T[]) => T,
  accumulator?: T,
) {
  if (arr.length === 0 && accumulator === undefined) {
    return new TypeError(
      "reduce was called without an accumulator and the array is empty",
    );
  }
  if (accumulator === undefined) {
    return fold(arr.slice(1), func, arr[0]!);
  } else {
    return fold(arr, func, accumulator);
  }
}
function reduceRight<T>(
  arr: T[],
  func: (x: T, y: T, idx: number, arr: T[]) => T,
  accumulator?: T,
) {
  return reduce(arr.reverse(), func, accumulator);
}