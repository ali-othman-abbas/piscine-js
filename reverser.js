const reverse = (ele) => {
  if (Array.isArray(ele)) {
    arrReverse(ele)
    return ele
  } else {
    arrStr = Array.from(ele)
    arrReverse(arrStr)
    return arrStr.join("")
  }
}

const arrReverse = (arr, l = 0, r = arr.length - 1) => {
  if (l >= r) {
    return
  }
  
  const tmp = arr[l]
  arr[l] = arr[r]
  arr[r] = tmp
  arrReverse(arr, l + 1, r - 1)
}

console.log(reverse([1, 2, 3]))