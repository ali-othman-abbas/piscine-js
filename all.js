/**
 *
 * @param {Record<string, Promise<any>>} obj
 * @returns
 */
async function all(obj) {
  if (Object.keys(obj).length === 0) {
    return Promise.resolve({});
  }
  let counter = 0;
  let failed = null;
  
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
      resolveFn();
    }
  }

  const arr = Object.entries(obj).map(([_, p]) => p);
  const resolvedArr = Array.from({length: arr.length})
  
  arr.forEach((p, idx) => {
    p = Promise.resolve(p);
    return p.then(
      (val) => {
        counter++;
        check();
        resolvedArr[idx] = val
      },
      (err) => {
        failed = err;
        check();
      },
    );
  });



  await promise;
  return Object.fromEntries(
    Object.entries(obj).map(([str, _], idx) => [str, resolvedArr[idx]]),
  );
}
