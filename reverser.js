const reverse = (ele) =>
  Array.isArray(ele)
    ? arrReverse(ele)
    : arrReverse(Array.from(ele)).join("")

const arrReverse = (arr, l = 0, r = arr.length - 1) => {
  if (l >= r) {
    return
  }
  
  const tmp = arr[l]
  arr[r] = arr[l]
  arr[l] = tmp
  arrReverse(arr, l + 1, r - 1)
}