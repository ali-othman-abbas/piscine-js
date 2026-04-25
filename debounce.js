/**
 * 
 * @param {(...arg: any) => void} func 
 * @param {number} wait 
 * @returns {(...arg: any) => void}
 */
 
function debounce(func, wait) {
  /**
   * @type {NodeJS.Timeout}
   */
  let timeout = null
  return (...arg) => {
    clearTimeout(timeout)
    timeout = setTimeout(
      () => func(...arg),
      wait
    )
  };
}



/**
 * 
 * @param {(...arg: any) => void} func 
 * @param {number} wait 
 * @returns {(...arg: any) => void}
 */
 function opDebounce(func, wait) {
   let timeout = null;
 
   return (...args) => {
     const shouldCallNow = timeout === null;
 
     if (timeout !== null) {
       clearTimeout(timeout);
     }
 
     timeout = setTimeout(() => {
       timeout = null; // allow next leading call
     }, wait);
 
     if (shouldCallNow) {
       func(...args);
     }
   };
 }
