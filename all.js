async function all(obj) {
  const arr = Object.entries(obj).map(([_, p]) => p);
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

  const returnedPromiseArr = await promise;
  return Object.fromEntries(
    Object.entries(obj).map(([str, _], idx) => [str, returnedPromiseArr[idx]]),
  );
}
