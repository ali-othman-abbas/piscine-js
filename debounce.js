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

const debounced = debounce((a, b) => {
  console.log(a + b)
}, 500)


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
 
     clearTimeout(timeout);
 
     timeout = setTimeout(() => {
       timeout = null; // reset after inactivity
     }, wait);
 
     if (shouldCallNow) {
       func(...args);
     }
   };
 }
