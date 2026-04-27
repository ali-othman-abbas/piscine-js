/**
 * @template T, U
 * @param {number} count
 * @param {(...args: T[]) => Promise<U>} callback
 * @return {(...args: T[]) => Promise<T[] | U>}
 */
function retry(count, callback) {
  let errCnt = 0;
  return async (...args) => {
    try {
      return await callback(...args);
    } catch (err) {
      errCnt++;
      if (errCnt >= count) {
        throw new Error(err);
      }
      return args
    }
  };
}

/**
 * @template T, U
 * @param {number} delay
 * @param {(...args: T[]) => Promise<U>} callback
 * @returns {(...args: T[]) => Promise<U>}
 */
function timeout(delay, callback) {
  return async (...args) => {
    const prom = new Promise(async (resolve, reject) => {
      setTimeout(() => reject(new Error("timeout")), delay);
      resolve(await callback(...args));
    });

    try {
      return await prom;
    } catch (err) {
      throw err;
    }
  };
}


