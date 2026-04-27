/**
 * @template T, U
 * @param {number} count
 * @param {(...args: T[]) => Promise<U>} callback
 * @return {(...args: T[]) => Promise<T[] | U>}
 */
function retry(count, callback) {
  let errCnt = 0;
  let funcErr = null;
  return async (...args) => {
    while (errCnt <= count) {
      try {
        return await callback(...args);
      } catch (err) {
        errCnt++;
        funcErr = err;
      }
    }
    throw funcErr;
  };
}

/**
 * @template T, U
 * @param {number} delay
 * @param {(...args: T[]) => Promise<U>} callback
 * @returns {(...args: T[]) => Promise<U>}
 */
function timeout(delay, callback) {
  const timer = new Promise((_, rej) =>
    setTimeout(rej, delay, new Error("timeout")),
  );
  return async (...args) => {
    return Promise.race([callback(...args), timer]);
  };
}
