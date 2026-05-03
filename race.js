/**
 *
 * @param {Promise<any>[]} arr
 * @returns
 */
function race(arr) {
  return new Promise((res, rej) => {
    arr.forEach((p) => Promise.resolve(p).then(res).catch(rej));
  });
}

/**
 *
 * @param {Promise<any>[]} arr
 * @param {number} count
 * @returns
 */
function some(arr, count) {
  count = Math.min(arr.length, count);
  if (count === 0) {
    return Promise.resolve([]);
  }
  const result = [];
  const out = new Array(arr.length);
  return new Promise((res, _) => {
    function dec() {
      count--;
      if (count === 0) {
        out.forEach(el => el ? result.push(el) : null)
      }
      
      res(result)
    }

    arr.forEach((p, pos) =>
      Promise.resolve(p).then((val) => {
        out[pos] = val;
        dec();
      }),
    );
  });
}
