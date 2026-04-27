/**
 * @template T, U
 * @param {number} count
 * @param {(...args: T[]) => Promise<U>} callback
 * @return {(...args: T[]) => Promise<T[] | U>}
 */
function retry(count, callback) {
  let errCnt = 0;
  let funcErr = null
  return async (...args) => {
    while (errCnt <= count) {
      try {
        return await callback(...args);
      } catch (err) {
        errCnt++
        funcErr = err
      }
    }
    
    throw new Error(funcErr)
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


