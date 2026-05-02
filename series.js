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
