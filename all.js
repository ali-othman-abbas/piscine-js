// /**
//  *
//  * @param {Record<string, Promise<any>>} obj
//  * @returns
//  */
// async function all(obj) {
//   if (Object.keys(obj).length === 0) {
//     return Promise.resolve({});
//   }
//   let counter = 0;
//   let failed = null;

//   let resolveFn;
//   let rejFn;
//   const promise = new Promise((res, rej) => {
//     resolveFn = res;
//     rejFn = rej;
//   });

//   function check() {
//     if (failed !== null) {
//       rejFn(failed);
//     }
//     if (counter === arr.length) {
//       resolveFn();
//     }
//   }

//   const arr = Object.entries(obj).map(([_, p]) => p);
//   const resolvedArr = Array.from({ length: arr.length });

//   arr.forEach((p, idx) => {
//     p = Promise.resolve(p);
//     return p.then(
//       (val) => {
//         counter++;
//         check();
//         resolvedArr[idx] = val;
//       },
//       (err) => {
//         failed = err;
//         check();
//       },
//     );
//   });

//   await promise;
//   return Object.fromEntries(
//     Object.entries(obj).map(([str, _], idx) => [str, resolvedArr[idx]]),
//   );
// }

/**
 *
 * @param {Record<string, any>} obj
 * @returns
 */
function all(obj) {
  const result = {};
  const keys = Object.keys(obj);
  return new Promise((res, rej) => {
    if (keys.length === 0) {
      res({});
    }
    let count = 0;
    function inc() {
      count++;
      if (count === keys.length) {
        res(result);
      }
    }
    for (let k of keys) {
      Promise.resolve(obj[k])
        .then((val) => {
          result[k] = val;
          inc();
        })
        .catch((err) => {
          rej(err);
        });
    }
  });
}
