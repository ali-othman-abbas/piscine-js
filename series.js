/**
 * 
 * @param {(() => Promise<any>)[]} arr 
 * @returns 
 */
function series(arr) {
  const results = Array.from({ length: arr.length });
  let remaining = arr.length;
  return new Promise((res, _) => {
    function dec() {
      remaining--;
      if (remaining === 0) {
        res(results);
      }
    }
    arr.forEach((func, idx) => {
      func().then((val) => {
        results[idx] = val;
        dec();
      });
    });
  });
}

// function wait(ms) {
//   return () =>
//     new Promise((res, _) => setTimeout(res, ms, ms));
// }

// const arr = [wait(2000), wait(500), wait(800)];

//   (async () => {
//     const start = Date.now()
//     console.log(await series(arr))
//     const duration = Date.now() - start
//     console.log(`${duration} ms have passed`)
//   })()