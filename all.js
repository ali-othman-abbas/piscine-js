/**
 *
 * @param {Promise<any>[]} arr
 */
async function all(arr) {
  let counter = 0;
  let failed = null;
  const promiseArr = arr.map((p) =>
    p.then(
      (val) => {
        counter++;
        check();
        return val;
      },
      (err) => {
        failed = err;
        check();
      },
    ),
  );

  let resolveFn;
  let rejFn;
  const promise = new Promise((res, rej) => {
    resolveFn = res;
    rejFn = rej;
  });

  function check() {
    if (failed !== null) {
      rejFn(failed);
    }
    if (counter === arr.length) {
      resolveFn(promiseArr);
    }
  }

  return promise;
}
