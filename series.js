/**
 * 
 * @param {(() => Promise<any>)[]} arr 
 * @returns 
 */
function series(arr) {
  return Promise.all(
    arr.map(func => Promise.resolve(func()))
  );
  // const results = Array.from({ length: arr.length });
  // let remaining = arr.length;
  // return new Promise((res, _) => {
  //   if (arr.length === 0) {
  //     res([])
  //   }
  //   function dec() {
  //     remaining--;
  //     if (remaining === 0) {
  //       res(results);
  //     }
  //   }
  //   arr.forEach((func, idx) => {
  //     Promise.resolve(func()).then((val) => {
  //       results[idx] = val;
  //       dec();
  //     });
  //   });
  // });
}

// function wait(ms) {
//   return () =>
//     new Promise((res, _) => setTimeout(res, ms, ms));
// }

// const arr = [wait(1000), wait(2000), wait(10)];

//   (async () => {
//     const start = Date.now()
//     console.log(await series(arr))
//     const duration = Date.now() - start
//     console.log(`${duration} ms have passed`)
//   })()