/**
 *
 * @param {Promise<any>[]} arr
 * @returns
 */
function race(arr) {
  return new Promise((res, rej) => {
    arr.forEach((p) => Promise.resolve(p).then(res, rej));
  });
}

function some(arr, count) {
  const result = [];
  if (arr.length === 0 || count === 0) {
    return Promise.resolve(undefined);
  }

  count = min(arr.length, count);
  return new Promise((res, _) => {
    function dec() {
      count--;
      if (count === 0) {
        res(result);
      }
    }

    arr.forEach((p) =>
      Promise.resolve(p).then((val) => {
        result.push(val);
        dec();
      }),
    );
  });
}
