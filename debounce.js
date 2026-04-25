/**
 * 
 * @param {(arg: any[]) => void} func 
 * @param {number} wait 
 * @returns {(arg: any[]) => void}
 */
 
function debounce(func, wait) {
  /**
   * @type {NodeJS.Timeout}
   */
  let timeout = null
  return (...arg) => {
    clearTimeout(timeout)
    timeout = setTimeout(
      () => func(arg)
    )
  };
}

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
  return (...args) => {
    if (timeout === null) {
      timeout = timeOutSetter()
    }
    if (fire) {
      func(args)
      fire = false
    }
    timeout.refresh()
  };
}