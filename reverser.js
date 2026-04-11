const reverse = (ele) =>
  Array.isArray(ele)
    ? arrReverse(ele)
    : arrReverse(Array.from(ele)).join("")

const arrReverse = (arr) =>
  arr.length === 0
    ? []
    : arr.length === 1
      ? [arr[0]]
      : [arr[arr.length - 1], ...arrReverse(arr.slice(1, -1)), arr[0]]