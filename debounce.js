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
function opDebounce(func, wait, options = {}) {
  if (options.leading === true) {
    return debounce(func, wait)
  }
  let fire = true
  const timeOutSetter = () =>
    setTimeout(() => {
      fire = true
    }, wait);
  /**
   * @type {NodeJS.Timeout}
   */
  let timeout = null
  return (...args) => {
    if (timeout === null) {
      timeout = timeOutSetter()
    }
    if (fire) {
      func(...args)
      fire = false
    }
    timeout.refresh()
  };
}