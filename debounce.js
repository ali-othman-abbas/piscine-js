/**
 * 
 * @param {() => void} func 
 * @param {number} wait 
 * @returns 
 */
 
function debounce(func, wait) {
  const timeOutSetter = () =>
    setTimeout(() => {
      func();
    }, wait);
  /**
   * @type {NodeJS.Timeout}
   */
  let timeout = null
  return () => {
    if (timeout === null) {
      timeout = timeOutSetter()
    }
    timeout.refresh()
  };
}

/**
 * 
 * @param {() => void} func 
 * @param {number} wait 
 * @returns 
 */
function opDebounce(func, wait) {
  let fire = true
  const timeOutSetter = () =>
    setTimeout(() => {
      fire = true
    }, wait);
  /**
   * @type {NodeJS.Timeout}
   */
  let timeout = null
  return () => {
    if (timeout === null) {
      timeout = timeOutSetter()
    }
    if (fire) {
      func()
      fire = false
    }
    timeout.refresh()
  };
}