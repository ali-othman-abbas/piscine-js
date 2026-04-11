const reverse = (ele) =>
  Array.isArray(ele)
    ? arrReverse(ele)
    : arrReverse(Array.from(ele)).join("")

const arrReverse = (arr, l = 0, r = arr.length - 1) => {
  if (l >= r) {
    return
  }
  
  const tmp = arr[0]
  arr[0] = arr[arr.length - 1]
  arr[arr.length - 1] = tmp
  arrReverse(arr, l + 1, r - 1)
}