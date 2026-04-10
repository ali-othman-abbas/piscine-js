const indexOf = (arr, val, begin) =>
  (typeof begin === 'number')
    ? indexOfRec(arr, val, begin)
    : indexOfRec(arr, val, 0)

const indexOfRec = (arr, val, idx) =>
  (idx >= arr.length)
    ? -1
    : (arr[idx] === val)
      ? idx
      : indexOfRec(arr, val, idx + 1);


const lastIndexOf = (arr, val, begin) =>
  (typeof begin === 'number')
    ? lastIndexOfRec(arr, val, begin)
    : lastIndexOfRec(arr, val, arr.length - 1)

const lastIndexOfRec = (arr, val, idx) =>
  (idx < 0 || idx >= arr.length)
    ? -1
    : (arr[idx] === val)
      ? idx
      : lastIndexOfRec(arr, val, idx - 1);

const includes = (arr, val) => indexOf(arr, val) > -1
