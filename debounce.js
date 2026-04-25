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
   let timeout = null
   let lastArgs = null
   let calledAgain = false
 
   return (...args) => {
     lastArgs = args
 
     const shouldCallNow = timeout === null
 
     if (shouldCallNow) {
       func(...args)
       calledAgain = false
     } else {
       calledAgain = true
     }
 
     clearTimeout(timeout)
 
     timeout = setTimeout(() => {
       timeout = null
 
       if (calledAgain) {
         func(...lastArgs)
       }
 
       lastArgs = null
       calledAgain = false
     }, wait)
   }
 }
